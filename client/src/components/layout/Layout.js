import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, isHome }) {
  return (
    <>
      <Header isHome={isHome} />
      {children}
      <Footer />
    </>
  );
}
