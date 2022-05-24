import { Link } from 'react-router-dom';

function UserBar() {
  return (
    <div>
      <Link to="/signup">회원 가입</Link>
      <Link to="/login">로그인</Link>
    </div>
  );
}

export default UserBar;
