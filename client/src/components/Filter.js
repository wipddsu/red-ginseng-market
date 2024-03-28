import { useContext, useState } from 'react';
import Category from './Category';

import { ProductsContext } from '../store/products-context';

export default function Filter({ style, handleFilter }) {
  const { onFilter, onReset } = useContext(ProductsContext);
  const [selectedCategory, setSelectedCategory] = useState([]);

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
    <div className={style.filter}>
      <Category style={style} selectedCategory={selectedCategory} onSelectCategory={hadleSelectCategory} />
      <div className={style.buttonBox}>
        <button
          onClick={() => {
            onReset();
            hadleResetCategory();
            handleFilter();
          }}
        >
          초기화
        </button>
        <button
          onClick={() => {
            handleFilter();
            onFilter(selectedCategory);
          }}
        >
          적용{selectedCategory.length > 0 && `(${selectedCategory.length})`}
        </button>
      </div>
    </div>
  );
}
