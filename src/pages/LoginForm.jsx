import { Link } from 'react-router-dom';
import FormInput from '../components/FormInput';

function LoginForm({
  id, onChangeId, password, onChangePassword,
}) {
  return (
    <form>
      <div>
        <label htmlFor="login-id">
          아이디
        </label>
        <FormInput
          type="text"
          id="login-id"
          name="id"
          value={id}
          onChange={onChangeId}
        />
      </div>
      <div>
        <label htmlFor="login-password">
          비밀번호
        </label>
        <FormInput
          type="password"
          id="login-password"
          name="password"
          value={password}
          onChange={onChangePassword}
        />
      </div>
      <Link to="/signup">회원가입</Link>
      <button
        type="button"
      >
        로그인
      </button>
    </form>
  );
}

export default LoginForm;
