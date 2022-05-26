import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const ProductList = styled.li({
  border: '1px solid #000000',
  padding: '0.63em',
  img: {
    width: '40%',
    height: '18.75em',
    objectFit: 'contain',
  },
});

function ProductItem({
  image, rating, title, id,
}) {
  return (
    <Link to={`/products/${id}`}>
      <ProductList>
        <p>{title}</p>
        <img src={image} />
        <span>{rating.rate}</span>
      </ProductList>
    </Link>
  );
}

export default ProductItem;
