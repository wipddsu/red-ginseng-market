import style from '../style/SearchProduct.module.css';

export default function SearchProduct() {
  return (
    <main>
      <div className={style.container}>
        <h2>상품 검색</h2>
        <form>
          <div>
            <input type="search" id="search" name="search" placeholder="검색어를 입력해주세요" />
            <button>검색</button>
          </div>
        </form>
      </div>
    </main>
  );
}
