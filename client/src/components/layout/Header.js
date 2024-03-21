import { Link } from 'react-router-dom';
import style from '../../style/Header.module.css';

export default function Header({ isHome }) {
  console.log(style.container);

  return (
    <header className={style.header}>
      <div className={!isHome && style.container}>
        {!isHome && <Link to="/">&#60;</Link>}
        <h1>RG Market</h1>
      </div>
    </header>
  );
}
