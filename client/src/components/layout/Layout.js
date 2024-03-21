import Navigator from './Navigator';
import Header from './Header';

export default function Layout({ children, isHome }) {
  return (
    <>
      <Header isHome={isHome} />
      {children}
      {isHome && <Navigator />}
    </>
  );
}
