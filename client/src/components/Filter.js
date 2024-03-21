export default function Filter({ style }) {
  return (
    <section className={style.filter}>
      <ul>
        <li>
          <button>가구</button>
        </li>
        <li>
          <button>생활가전</button>
        </li>
        <li>
          <button>디지털기기</button>
        </li>
        <li>
          <button>의류</button>
        </li>
        <li>
          <button>뷰티</button>
        </li>
        <li>
          <button>도서</button>
        </li>
        <li>
          <button>반려동물</button>
        </li>
        <li>
          <button>기타</button>
        </li>
      </ul>
      <div>
        <button>초기화</button>
        <button>적용</button>
      </div>
    </section>
  );
}
