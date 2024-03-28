import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import style from '../style/SearchProduct.module.css';
import useHttp from '../hooks/useHttp';

const config = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

export default function SearchProduct() {
  const [query, setQuery] = useState('');
  const { data, error, sendRequest } = useHttp('http://localhost:3001/search', config, null);
  const navigate = useNavigate();

  async function handleSearch(e) {
    e.preventDefault();
    await sendRequest(JSON.stringify({ query }));
  }

  useEffect(() => {
    if (data) {
      navigate(`/search/${query}`, {
        state: [...data],
      });
    }
  }, [data]);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <main>
      <div className={style.container}>
        {error && <p>{error.message}</p>}
        <h2>상품 검색</h2>
        <form onSubmit={handleSearch}>
          <div>
            <input
              type="search"
              id="search"
              name="q"
              placeholder="검색어를 입력해주세요"
              value={query}
              onChange={handleChange}
            />
            <button>검색</button>
          </div>
        </form>
      </div>
    </main>
  );
}
