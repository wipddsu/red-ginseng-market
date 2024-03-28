import style from '../style/AllProducts.module.css';
import ProductsList from './ProductsList';

export default function AllProducts() {
  return (
    <main className={style.products}>
      <ProductsList />
    </main>
  );
}
