import styled from '@emotion/styled'
import {Link} from "react-router-dom";

let Item = styled.li({
  border: '1px solid #000000',
  padding: '0.63em',
  img: {
    width: '40%',
    height: '18.75em',
    objectFit: "contain"
  }
})


const SearchedItem = ({image, rating, title, id}) => (
  <Link to={`/products/${id}`}>
    <Item>
      <p>{title}</p>
      <img src={image}/>
      <span>{rating.rate}</span>
    </Item>
  </Link>
)

export default SearchedItem;
