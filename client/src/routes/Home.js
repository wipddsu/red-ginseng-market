import { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import AllProducts from '../components/AllProducts';
import Navigator from './Navigator';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      setIsLoading(true);

      try {
        const response = await fetch('http://localhost:3001/products');
        const data = await response.json();

        if (!response.ok) {
          throw new Error('Failed to load Data');
        }

        setProducts(data.products);
      } catch (error) {
        setError({
          message: 'Could not load products, pleas try again later.',
        });
      }

      setIsLoading(false);
    }

    fetchProducts();
  }, []);

  function handleFilterProducts(categorys) {
    console.log(categorys);
  }

  return (
    <Layout>
      <AllProducts products={products} isLoading={isLoading} error={error} />
      <Navigator products={products} onFilter={handleFilterProducts} />
    </Layout>
  );
}
