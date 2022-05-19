import styled from '@emotion/styled'
import {Link} from "react-router-dom";

let ProductList = styled.li({
  border: '1px solid #000000',
  padding: '10px',
  img:{
    width: '100%',
    height: '300px',
    objectFit: 'contain'
  }
})





const ProductItem = ({ image, rating, title, id}) => (
  <Link to={`/products/${id}`}>
    <ProductList>
      <p>{title}</p>
      <img src={image} />
      <span>{rating.rate}</span>
    </ProductList>
  </Link>
)

export default ProductItem;
