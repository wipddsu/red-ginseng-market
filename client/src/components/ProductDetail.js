import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Error from './Error';

import style from '../style/ProductDetail.module.css';
import useHttp from '../hooks/useHttp';

const initialConfig = {};

const deleteConfig = {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
};

export default function ProductDetail({ id }) {
  const [url, setUrl] = useState(`http://localhost:3001/products/${id}`);
  const [config, setConfig] = useState(initialConfig);
  const { data: product, isLoading, error, sendRequest } = useHttp(url, config, null);
  const navigate = useNavigate();

  useEffect(() => {
    if (url !== `http://localhost:3001/products/${id}` && config.method === 'DELETE') {
      sendRequest();
    }
  }, [url, config]);

  useEffect(() => {
    if (!isLoading && !error && config.method === 'DELETE') {
      navigate('/');
    }
  }, [url, config]);

  function handleDelete() {
    setUrl(`http://localhost:3001/products/${id}/delete`);
    setConfig(deleteConfig);
  }

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
          <button onClick={handleDelete}>삭제</button>
        </>
      )}
    </main>
  );
}
