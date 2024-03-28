import { useContext } from 'react';
import Error from './Error';
import { Link } from 'react-router-dom';

import { ProductsContext } from '../store/products-context';

export default function ProductsList() {
  const { products, isLoading, error } = useContext(ProductsContext);

  if (error) {
    return <Error title="An error occurred!" message={error.message} />;
  }

  return (
    <>
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
        </>
      )}
    </>
  );
}
