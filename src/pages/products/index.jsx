import {useQuery} from "react-query";
import {fetcher, QueryKeys} from "../../queryClient";
import ProductItem from "../../components/product/item";
import styled from '@emotion/styled';

let Products = styled.ul({
  listStyle: 'none',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '0.63em',
})

const ProductList = () => {
  const { data } = useQuery(QueryKeys.PRODUCTS, () =>
    fetcher({
    method: 'GET',
    path: '/products'
  }),
  )
  console.log(data);

  return (
    <div>
      <Products>
        {data ?.map(product => (
          <ProductItem {...product} key={product.id} />
        ))}
      </Products>
    </div>
  );
};

export default ProductList;
