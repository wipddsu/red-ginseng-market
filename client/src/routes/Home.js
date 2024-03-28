import { useState } from 'react';
import Layout from '../components/layout/Layout';
import AllProducts from '../components/AllProducts';
import Navigator from '../components/Navigator';
import Aside from '../components/Aside';
import ProductsContextProvider from '../store/products-context';

import useHttp from '../hooks/useHttp';

const productsInitialData = [];

export default function Home() {
  const [url, setUrl] = useState('http://localhost:3001/products');
  const { data: products, isLoading, error } = useHttp(url, null, productsInitialData);

  async function handleFilterProducts(categorys) {
    setUrl(`http://localhost:3001/products?filter=${categorys.join(' ')}`);
  }

  async function handleResetFilter() {
    setUrl('http://localhost:3001/products');
  }

  return (
    <ProductsContextProvider>
      <Layout isHome={true}>
        <AllProducts isLoading={isLoading} error={error} />
        <Navigator onFilter={handleFilterProducts} onReset={handleResetFilter} />
        <Aside />
      </Layout>
    </ProductsContextProvider>
  );
}
