import { useState } from 'react';
import { Link } from 'react-router-dom';
import Filter from '../components/Filter';

import style from '../style/Navigator.module.css';

export default function Navigator({ products, onFilter, onReset }) {
  const [filterIsOn, setFilterIsOn] = useState(false);
  const [selectCategory, setSelectedCategory] = useState([]);

  function handleFilter() {
    setFilterIsOn((prev) => !prev);
  }

  function hadleSelectCategory(e) {
    const categoryTitle = e.target.innerText;

    if (!selectCategory.includes(categoryTitle)) {
      setSelectedCategory((prev) => [...prev, categoryTitle]);
    } else {
      setSelectedCategory((prev) => prev.filter((item) => item !== categoryTitle));
    }
  }

  function hadleResetCategory() {
    onReset();
    setSelectedCategory([]);
  }

  return (
    <>
      <nav className={style.navigator}>
        {filterIsOn && (
          <Filter
            style={style}
            onFilter={onFilter}
            onReset={hadleResetCategory}
            selectCategory={selectCategory}
            onSelectCategory={hadleSelectCategory}
          />
        )}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <button onClick={handleFilter}>Filter</button>
          </li>
        </ul>
      </nav>
    </>
  );
}
