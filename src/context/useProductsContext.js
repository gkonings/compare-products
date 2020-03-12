import { useEffect, useState, useMemo } from "react";
import fetchProducts from "services/fetchProducts";

export const defaultProductsContext = [
  {
    toggleFilter: () => null,
    isSelected: () => null,
    allProducts: [],
    filteredProducts: [],
    productProperties: null,
    status: null
  }
];

const nonDisplayProductProperties = [
  "salePrice",
  "manufacturerName",
  "grossPrice",
  "BUP_UOM",
  "BUP_Value",
  "uom",
  "productImage",
  "BUP_Conversion",
  "minQuantity",
  "manufacturerImage",
  "name",
  "sku",
  "listPrice",
  "channel",
  "display",
  "atp",
  "badges"
];

const filterProductProperties = products =>
  products &&
  products.length &&
  Object.keys(products[0])
    .filter(property => nonDisplayProductProperties.indexOf(property) < 0)
    .sort();

const useProductsContext = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [productProperties, setProductProperties] = useState([]);
  const [status, setStatus] = useState();
  const [visibleProducts, setVisibleProducts] = useState([]);

  const filteredProducts = allProducts
    .filter(product => visibleProducts.indexOf(product.Artikelnummer) >= 0)
    .sort();

  const getProducts = async () => {
    // nothing loaded yet?
    if (!status) {
      setStatus("loading");
      try {
        const result = await fetchProducts();

        setAllProducts(result);
        setProductProperties(filterProductProperties(result));
        setStatus("succes");

        // set initial selection
        setVisibleProducts(result.slice(0, 2).map(p => p.Artikelnummer));
      } catch (error) {
        setStatus("error");
      }
    }
  };

  const isSelected = useMemo(
    () => product => visibleProducts.indexOf(product.Artikelnummer) >= 0,
    [visibleProducts]
  );

  const toggleFilter = product => {
    const { Artikelnummer } = product;
    if (isSelected(product)) {
      // remove
      setVisibleProducts(prev => prev.filter(a => a !== Artikelnummer));
    } else {
      // add
      setVisibleProducts(prev => [...prev, Artikelnummer]);
    }
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    toggleFilter,
    isSelected,
    allProducts,
    filteredProducts,
    productProperties,
    status
  };
};

export default useProductsContext;
