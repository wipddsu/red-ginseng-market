import { useEffect, useState } from 'react';
import Error from './Error';

import style from '../style/ProductDetail.module.css';

export default function ProductDetail({ id }) {
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      setIsLoading(true);

      try {
        const response = await fetch(`http://localhost:3001/products/${id}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error('Failed to load Data');
        }

        setProduct(data);
      } catch (error) {
        setError({
          message: 'Could not load product, pleas try again later.',
        });
      }

      setIsLoading(false);
    }

    fetchProduct();
  }, []);

  if (error) {
    return (
      <main>
        <Error title="An error occurred!" message={error.message} />
      </main>
    );
  }

  return (
    <main>
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && product && (
        <>
          <img src={product.image} />
          <div>
            <h2>{product.title}</h2>
            <span>{product.brand}</span>
          </div>
          <span>{product.category}</span>
          <p>{product.description}</p>
        </>
      )}
    </main>
  );
}
