const fetchResource = async (url) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });

  const json = await response.json();
  return json;
};

const fetchProducts = async () => {
  const result = await fetchResource('http://5c35e7f96fc11c0014d32fcd.mockapi.io/compare/products');
  return result.products;
};


export default fetchProducts;
