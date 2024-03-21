import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();

      setProducts(data.products);
    }

    fetchProducts();
  }, []);

  return (
    <>
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <div>
            <img src={product.images[0]} />
            <h2>{product.title}</h2>
          </div>
        </Link>
      ))}
      <Link to="/login">로그인</Link>
      <Link to="/register">회원가입</Link>
    </>
  );
}
