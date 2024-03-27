import Error from './Error';

import style from '../style/ProductDetail.module.css';
import { useNavigate } from 'react-router-dom';
import useHttp from '../hooks/useHttp';

export default function ProductDetail({ id }) {
  const { data: product, isLoading, error } = useHttp(`http://localhost:3001/products/${id}`);
  const navigate = useNavigate();

  if (error) {
    return (
      <main>
        <Error title="An error occurred!" message={error.message} />
      </main>
    );
  }

  // async function handleDelete() {
  //   setIsLoading(true);

  //   try {
  //     const response = await fetch(`http://localhost:3001/products/${id}/delete`, {
  //       method: 'DELETE',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });

  //     if (!response.ok) {
  //       throw new Error('Failed to delete Data');
  //     }

  //     navigate('/');
  //   } catch (error) {
  //     setError({
  //       message: 'Could not load product, pleas try again later.',
  //     });
  //   }

  //   setIsLoading(false);
  // }

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
          <button>삭제</button>
        </>
      )}
    </main>
  );
}
