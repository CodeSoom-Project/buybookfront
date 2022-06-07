import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
`;

const Item = styled.div({
  height: '1.5em',
  marginLeft: '2%',
});

const CenterItem = styled.div`
  flex-grow: 1;
`;

function UserBar() {
  return (
    <Container>
      <Item />
      <CenterItem />
      <Item>
        {/* <Link to="/login">로그인</Link> */}
      </Item>
    </Container>
  );
}

export default UserBar;
