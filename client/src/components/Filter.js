import Category from './Category';

export default function Filter({ style, onFilter, onReset, selectCategory, onSelectCategory }) {
  return (
    <div className={style.filter}>
      <Category selectCategory={selectCategory} style={style} onSelectCategory={onSelectCategory} />
      <div className={style.buttonBox}>
        <button onClick={onReset}>초기화</button>
        <button onClick={() => onFilter(selectCategory)}>적용</button>
      </div>
    </div>
  );
}
