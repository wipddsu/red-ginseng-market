import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import style from '../style/SearchProduct.module.css';

export default function SearchProduct() {
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function handleSearch() {
    try {
      const data = await fetchSearchedProducts();
      navigate(`/search/${query}`, {
        state: [...data],
      });
    } catch (error) {
      setError({
        message: 'Could not search products, please try again later.',
      });
    }
  }

  async function fetchSearchedProducts() {
    const response = await fetch('http://localhost:3001/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error('Failed to search product');
    }

    const data = await response.json();
    return data;
  }

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <main>
      <div className={style.container}>
        {error && <p>{error.message}</p>}
        <h2>상품 검색</h2>
        <form>
          <div>
            <input
              type="search"
              id="search"
              name="q"
              placeholder="검색어를 입력해주세요"
              value={query}
              onChange={handleChange}
            />
            <button type="button" onClick={handleSearch}>
              검색
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
