import { useState } from 'react';
import { Link } from 'react-router-dom';
import Filter from './Filter';

import style from '../style/Navigator.module.css';

export default function Navigator() {
  const [filterIsOn, setFilterIsOn] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState([]);

  function handleFilter() {
    setFilterIsOn((prev) => !prev);
  }

  function hadleSelectCategory(e) {
    const categoryTitle = e.target.innerText;

    if (!selectedCategory.includes(categoryTitle)) {
      setSelectedCategory((prev) => [...prev, categoryTitle]);
    } else {
      setSelectedCategory((prev) => prev.filter((item) => item !== categoryTitle));
    }
  }

  function hadleResetCategory() {
    setSelectedCategory([]);
  }

  return (
    <>
      <nav className={style.navigator}>
        {filterIsOn && (
          <Filter
            style={style}
            handleFilter={handleFilter}
            selectedCategory={selectedCategory}
            onSelectCategory={hadleSelectCategory}
            onResetCategory={hadleResetCategory}
          />
        )}
        <ul className={style.navBar}>
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
