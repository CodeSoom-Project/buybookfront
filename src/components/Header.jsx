import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SearchBarContainer from './SearchBarContainer';

const NavStyle = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#DAD0ED',
  padding: '0.5em 0.75em',
});

const LinkStyle = styled.a`
  text-decoration: none;
  font-color: #FFFFFF;
  Link: {
    font-color: #FFFFFF,
  }
`;

function Header() {
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  return (
    <NavStyle>
      <LinkStyle>
        <Link to="/">buyBook</Link>
      </LinkStyle>
      <div>
        <SearchBarContainer />
        <Link to="/products">상품목록</Link>
        <Link to="/cart">장바구니</Link>
        <span>{cartTotalQuantity}</span>
      </div>
    </NavStyle>
  );
}

export default Header;
