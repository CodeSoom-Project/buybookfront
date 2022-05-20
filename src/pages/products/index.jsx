import {useQuery} from "react-query";
import {fetcher, QueryKeys} from "../../queryClient";
import ProductItem from "../../components/product/item";
import styled from '@emotion/styled';

let Products = styled.ul({
  listStyle: 'none',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateRows: 'repeat(3, 1fr)',
  gap: '0.63em',
})

const ProductList = () => {
  const { data } = useQuery(QueryKeys.PRODUCTS, () =>
      fetcher({
      method: 'GET',
      path: '/products'
    }),
  )

  return (
    <div>
      <h2>상품목록</h2>
      <Products>
        {data ?.map(product => (
          <ProductItem {...product} key={product.id} />
        ))}
      </Products>
    </div>
  );
};

export default ProductList;
