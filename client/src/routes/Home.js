import Layout from '../components/layout/Layout';
import AllProducts from '../components/AllProducts';

export default function Home() {
  const isHome = true;

  return (
    <Layout isHome={isHome}>
      <AllProducts />
    </Layout>
  );
}
