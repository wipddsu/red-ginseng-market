const category = ['가구', '생활가전', '디지털기기', '의류', '뷰티', '도서', '반려동물', '기타'];

export default function Category({ style, selectedCategory, onSelectCategory }) {
  return (
    <ul>
      {category.map((item) => {
        let cssClasses;

        if (!selectedCategory.includes(item)) {
          cssClasses = '';
        } else {
          cssClasses = style.selected;
        }

        return (
          <li key={item}>
            <button className={cssClasses} onClick={onSelectCategory}>
              {item}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
