import { Link } from 'react-router-dom';
import style from '../style/Aside.module.css';

export default function Aside() {
  return (
    <section className={style.newProductBtn}>
      <Link to="/new">
        <span>+</span>
      </Link>
    </section>
  );
}
