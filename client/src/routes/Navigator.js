import { useState } from 'react';
import { Link } from 'react-router-dom';
import Filter from '../components/Filter';

import style from '../style/Navigator.module.css';

export default function Navigator({ products, onFilter }) {
  const [filterIsOn, setFilterIsOn] = useState(false);

  function handleFilter() {
    setFilterIsOn((prev) => !prev);
  }

  return (
    <>
      <nav className={style.navigator}>
        {filterIsOn && <Filter style={style} />}
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
