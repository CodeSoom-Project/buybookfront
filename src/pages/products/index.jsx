import { useQuery } from 'react-query';
import styled from '@emotion/styled';
import { fetcher, QueryKeys } from '../../queryClient';
import ProductItem from '../../components/product/item';

const Products = styled.ul({
  listStyle: 'none',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateRows: 'repeat(3, 1fr)',
  gap: '0.63em',
});

function ProductList() {
  const { data } = useQuery(QueryKeys.PRODUCTS, () => fetcher({
    method: 'GET',
    path: '/products',
  }));

  return (
    <div>
      <h2>상품목록</h2>
      <Products>
        {data?.map((product) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </Products>
    </div>
  );
}

export default ProductList;
