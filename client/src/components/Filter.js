import Category from './Category';

export default function Filter({ style, onFilter, onReset, selectCategory, onSelectCategory }) {
  return (
    <div className={style.filter}>
      <Category style={style} selectCategory={selectCategory} onSelectCategory={onSelectCategory} />
      <div className={style.buttonBox}>
        <button onClick={onReset} disabled={selectCategory.length === 0 && true}>
          초기화
        </button>
        <button onClick={() => onFilter(selectCategory)} disabled={selectCategory.length === 0 && true}>
          적용
        </button>
      </div>
    </div>
  );
}
