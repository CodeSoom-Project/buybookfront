import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import SearchBarContainer from './SearchBarContainer';

const NavStyle = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#263343',
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
  return (
    <NavStyle>
      <LinkStyle>
        <Link to="/">buyBook</Link>
      </LinkStyle>
      <div>
        <SearchBarContainer />
        <Link to="/products">상품목록</Link>
        {/* <Link to="/cart">장바구니</Link> */}
      </div>
    </NavStyle>
  );
}

export default Header;
