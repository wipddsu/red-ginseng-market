import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import style from '../style/AllProducts.module.css';
import Aside from './Aside';

export default function AllProducts() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();

      setProducts(data.products);
      setIsLoading(false);
    }

    fetchProducts();
  }, []);

  return (
    <main className={style.products}>
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && (
        <>
          {products.map((product) => (
            <div key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img src={product.images[0]} />
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
