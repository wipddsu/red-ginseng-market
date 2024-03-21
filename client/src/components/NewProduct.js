import style from '../style/NewProduct.module.css';

export default function NewProduct() {
  return (
    <main className={style.formSheet}>
      <div className={style.container}>
        <h2>상품 등록</h2>
        <form>
          <div>
            <label htmlFor="title">상품명</label>
            <input type="text" id="title" name="title" className={style.input} />
          </div>
          <div>
            <label htmlFor="image">이미지</label>
            <input type="file" id="image" name="image" />
          </div>
          <div>
            <label htmlFor="category">카테고리</label>
            <select type="file" id="category" name="category">
              <option>가구</option>
              <option>생활가전</option>
              <option>디지털기기</option>
              <option>의류</option>
              <option>뷰티</option>
              <option>도서</option>
              <option>반려동물</option>
              <option>기타</option>
            </select>
          </div>
          <div>
            <label htmlFor="price">가격</label>
            <input type="number" id="price" name="price" />
          </div>
          <div>
            <label htmlFor="content">내용</label>
            <textarea type="number" id="content" name="content" rows={10} />
          </div>
          <button>등록</button>
        </form>
      </div>
    </main>
  );
}
