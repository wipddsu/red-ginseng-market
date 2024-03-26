import { useState } from 'react';
import Category from './Category';

export default function Filter({ style }) {
  const [selectFilter, setSelectedFilter] = useState([]);

  function hadleSelectFilter(e) {
    const categoryTitle = e.target.innerText;

    if (!selectFilter.includes(categoryTitle)) {
      setSelectedFilter((prev) => [...prev, categoryTitle]);
    } else {
      setSelectedFilter((prev) => prev.filter((item) => item !== categoryTitle));
    }
  }

  async function handleSubmit() {
    console.log(selectFilter);
  }

  return (
    <div className={style.filter}>
      <Category selectFilter={selectFilter} style={style} onSelectFilter={hadleSelectFilter} />
      <div className={style.buttonBox}>
        <button>초기화</button>
        <button onClick={handleSubmit}>적용</button>
      </div>
    </div>
  );
}
