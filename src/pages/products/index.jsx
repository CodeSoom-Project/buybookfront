import {useQuery} from "react-query";
import {fetcher, QueryKeys} from "../../queryClient";
import ProductItem from "../../components/product/item";


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
      <ul>
        {data ?.map(product => (
          <ProductItem {...product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
