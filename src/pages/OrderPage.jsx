import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetcher, QueryKeys } from '../queryClient';
import Order from './Order';

function OrderPage() {
  const { id } = useParams();

  const { data } = useQuery(
    [QueryKeys.PRODUCTS, id],
    () => fetcher({
      method: 'GET',
      path: `/products/${id}`,
    }),
  );

  if (!data) return null;

  return (
    <div>
      <h2>주문/결제</h2>
      <Order item={data} />
    </div>
  );
}

export default OrderPage;
