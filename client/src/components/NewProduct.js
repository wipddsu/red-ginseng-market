import { useState } from 'react';
import style from '../style/NewProduct.module.css';

export default function NewProduct() {
  const [isErrors, setIsErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());

    for (const key in data) {
      if (data[key] === '') {
        setIsErrors((prev) => [...prev, key]);
      } else {
        setIsErrors((prev) => prev.filter((item) => item !== key));
      }
    }

    for (const key in data) {
      if (data[key] === '') {
        return;
      }
    }

    const acquisitionCategory = fd.getAll('category');
    data.category = acquisitionCategory;
  }

  return (
    <main className={style.formSheet}>
      <div className={style.container}>
        <h2>상품 등록</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">상품명</label>
            <input type="text" id="title" name="title" className={style.input} />
            {isErrors.includes('title') && <p>상품명을 입력해주세요.</p>}
          </div>
          <div>
            <label htmlFor="image">이미지 링크</label>
            <input type="url" id="image" name="image" />
            {isErrors.includes('image') && <p>이미지 링크를 입력해주세요.</p>}
          </div>
          <div>
            <label htmlFor="category">카테고리</label>
            <select id="category" name="category">
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
            {isErrors.includes('price') && <p>가격을 입력해주세요.</p>}
          </div>
          <div>
            <label htmlFor="content">내용</label>
            <textarea type="number" id="content" name="content" rows={10} />
            {isErrors.includes('content') && <p>내용을 입력해주세요.</p>}
          </div>
          <button>등록</button>
        </form>
      </div>
    </main>
  );
}
