import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ProductDetail from '../components/ProductDetail';

export default function Detail() {
  const { id } = useParams();

  return (
    <Layout>
      <ProductDetail id={id} />
    </Layout>
  );
}
