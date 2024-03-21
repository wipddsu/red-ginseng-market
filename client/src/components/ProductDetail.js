import { useEffect, useState } from 'react';

import style from '../style/ProductDetail.module.css';

export default function ProductDetail({ id }) {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();

      setProduct(data);
      setIsLoading(false);
    }

    fetchProduct();
  }, []);

  return (
    <main>
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && (
        <>
          <img src={product.images[0]} />
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
