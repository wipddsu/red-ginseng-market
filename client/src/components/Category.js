const category = ['가구', '생활가전', '디지털기기', '의류', '뷰티', '도서', '반려동물', '기타'];

export default function Category({ selectFilter, style, onSelectFilter }) {
  return (
    <ul>
      {category.map((item) => {
        let cssClasses;

        if (!selectFilter.includes(item)) {
          cssClasses = '';
        } else {
          cssClasses = style.selected;
        }

        return (
          <li key={item}>
            <button className={cssClasses} onClick={onSelectFilter}>
              {item}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
