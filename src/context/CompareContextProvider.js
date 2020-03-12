import React, { createContext } from 'react';
import pt from 'prop-types';

import useProductsContext, { defaultProductsContext } from './useProductsContext';

const CompareContext = createContext({
  ...defaultProductsContext,
});

export const CompareContextProvider = ({ children }) => {
  const value = { ...useProductsContext() };

  return <CompareContext.Provider value={value}>{children}</CompareContext.Provider>;
};

CompareContextProvider.propTypes = {
  children: pt.oneOfType([pt.node, pt.arrayOf(pt.node)]).isRequired,
};

export default CompareContext;
