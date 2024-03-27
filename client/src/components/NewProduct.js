import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import style from '../style/NewProduct.module.css';

export default function NewProduct() {
  const [isEmpty, setIsEmpty] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function handleNewProduct(data) {
    try {
      const response = await fetch('http://localhost:3001/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to Create Data');
      }

      navigate('/');
    } catch (error) {
      setError({
        message: 'Could not create new product, please try again later.',
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());

    setIsEmpty((prevIsEmpty) => {
      let updatedIsEmpty = [...prevIsEmpty];

      for (const key in data) {
        if (data[key] === '' && !updatedIsEmpty.includes(key)) {
          updatedIsEmpty.push(key);
        } else if (data[key] !== '') {
          updatedIsEmpty = updatedIsEmpty.filter((item) => item !== key);
        }
      }

      console.log(updatedIsEmpty);

      if (updatedIsEmpty.length === 0) {
        handleNewProduct(data);
      }

      return updatedIsEmpty;
    });
  }

  return (
    <main className={style.formSheet}>
      <div className={style.container}>
        {error && <p>{error.message}</p>}
        {!error && (
          <>
            <h2>상품 등록</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="title">상품명</label>
                <input type="text" id="title" name="title" className={style.input} />
                {isEmpty.includes('title') && <p>상품명을 입력해주세요.</p>}
              </div>
              <div>
                <label htmlFor="brand">브랜드</label>
                <input type="text" id="brand" name="brand" className={style.input} />
                {isEmpty.includes('brand') && <p>브랜드명을 입력해주세요.</p>}
              </div>
              <div>
                <label htmlFor="image">이미지 링크</label>
                <input type="url" id="image" name="image" />
                {isEmpty.includes('image') && <p>이미지 링크를 입력해주세요.</p>}
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
                {isEmpty.includes('price') && <p>가격을 입력해주세요.</p>}
              </div>
              <div>
                <label htmlFor="content">내용</label>
                <textarea type="number" id="content" name="content" rows={10} />
                {isEmpty.includes('content') && <p>내용을 입력해주세요.</p>}
              </div>
              <button>등록</button>
            </form>
          </>
        )}
      </div>
    </main>
  );
}
