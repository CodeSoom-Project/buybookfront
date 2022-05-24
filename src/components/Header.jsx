import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import SearchBarContainer from './SearchBarContainer';

const NavStyle = styled.nav({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#263343',
  padding: '0.5em 0.75em',
  a: {
    textDecoration: 'none',
    fontColor: '#FFFFFF',
  },
  div: {
    fontSize: '1.5em',
    fontColor: '#FFFFFF',
  },
  ul: {
    fontColor: '#FFFFFF',
  },
});

function Header() {
  return (
    <NavStyle>
      <div>
        <Link to="/">buyBook</Link>
      </div>
      <ul>
        <SearchBarContainer />
        <Link to="/products">상품목록</Link>
        <Link to="/cart">장바구니</Link>
      </ul>
    </NavStyle>
  );
}

export default Header;
