import { useState, useEffect } from 'react';
import Aside from './Aside';
import Error from './Error';
import { Link } from 'react-router-dom';

import style from '../style/AllProducts.module.css';

export default function AllProducts() {
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

  if (error) {
    return (
      <main className={style.products}>
        <Error title="An error occurred!" message={error.message} />
      </main>
    );
  }

  return (
    <main className={style.products}>
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && products.length === 0 && <p>No products available</p>}
      {!isLoading && products.length > 0 && (
        <>
          {products.map((product) => (
            <div key={product._id}>
              <Link to={`/product/${product._id}`}>
                <img src={product.image} />
                <div>
                  <h2>{product.title}</h2>
                  <span>{product.category}</span>
                  <p>$ {product.price}</p>
                </div>
              </Link>
            </div>
          ))}
          <Aside />
        </>
      )}
    </main>
  );
}
