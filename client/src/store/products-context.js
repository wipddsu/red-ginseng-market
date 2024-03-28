import { createContext, useState } from 'react';

import useHttp from '../hooks/useHttp';

export const ProductsContext = createContext({
  products: [],
  isLoading: '',
  error: '',
  onFilter: () => {},
  onReset: () => {},
});

const productsInitialData = [];

export default function ProductsContextProvider({ children }) {
  const [url, setUrl] = useState('http://localhost:3001/products');
  const { data: products, isLoading, error } = useHttp(url, null, productsInitialData);

  async function handleFilterProducts(categorys) {
    setUrl(`http://localhost:3001/products?filter=${categorys.join(' ')}`);
  }

  async function handleResetFilter() {
    setUrl('http://localhost:3001/products');
  }

  const productsCtx = {
    products: products,
    isLoading,
    error,
    onFilter: handleFilterProducts,
    onReset: handleResetFilter,
  };

  return <ProductsContext.Provider value={productsCtx}>{children}</ProductsContext.Provider>;
}
