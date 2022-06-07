import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetcher, QueryKeys } from '../../queryClient';
import ProductDetail from '../../components/product/detail';
import { addToCart } from '../../cartSlice';

function ProductDetailPage() {
  const { id } = useParams();

  const { data } = useQuery(
    [QueryKeys.PRODUCTS, id],
    () => fetcher({
      method: 'GET',
      path: `/products/${id}`,
    }),
  );

  const dispatch = useDispatch();

  if (!data) return null;

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h2>상품상세</h2>
      <ProductDetail
        item={data}
        onClick={() => handleAddToCart(data)}
      />
    </div>
  );
}

export default ProductDetailPage;
