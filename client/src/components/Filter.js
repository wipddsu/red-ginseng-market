import { useContext } from 'react';
import Category from './Category';

import { ProductsContext } from '../store/products-context';

export default function Filter({ style, handleFilter, selectedCategory, onSelectCategory, onResetCategory }) {
  const { onFilter, onReset } = useContext(ProductsContext);

  return (
    <div className={style.filter}>
      <Category style={style} selectedCategory={selectedCategory} onSelectCategory={onSelectCategory} />
      <div className={style.buttonBox}>
        <button
          onClick={() => {
            onReset();
            onResetCategory();
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
