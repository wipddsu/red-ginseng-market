import Aside from './Aside';
import Error from './Error';
import { Link } from 'react-router-dom';

import style from '../style/AllProducts.module.css';

export default function AllProducts({ products, isLoading, error }) {
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
