import { useState } from 'react';
import { Link } from 'react-router-dom';
import Filter from './Filter';

import style from '../style/Navigator.module.css';

export default function Navigator() {
  const [filterIsOn, setFilterIsOn] = useState(false);

  function handleFilter() {
    setFilterIsOn((prev) => !prev);
  }

  return (
    <>
      <nav className={style.navigator}>
        {filterIsOn && <Filter style={style} handleFilter={handleFilter} />}
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
