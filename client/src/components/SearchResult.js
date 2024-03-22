import { useLocation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function SearchResult() {
  const query = useParams();
  const location = useLocation();
  const products = location.state;

  return (
    <main>
      <h2>검색어: {query.q}</h2>
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/product/${product.id}`}>
            <img src={product.image} />
            <div>
              <h2>{product.title}</h2>
              <span>{product.category}</span>
              <p>$ {product.price}</p>
            </div>
          </Link>
        </div>
      ))}
    </main>
  );
}
