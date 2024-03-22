import { Link } from 'react-router-dom';
import style from '../../style/Header.module.css';

export default function Header({ isHome }) {
  return (
    <header className={style.header}>
      <div className={!isHome ? style.container : undefined}>
        {!isHome && <Link to="/">&#60;</Link>}
        <h1>RG Market</h1>
      </div>
    </header>
  );
}
