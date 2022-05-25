import { Link } from 'react-router-dom';

function LoginForm() {
  return (
    <>
      <form>
        <label htmlFor="login-email">
          E-mail
        </label>
        <input
          type="email"
          id="login-email"
          name="email"
          value=""
        />
      </form>
      <form>
        <label htmlFor="login-password">
          Password
        </label>
        <input
          type="password"
          id="login-password"
          name="password"
          value=""
        />
      </form>
      <Link to="/signup">계정 만들기</Link>
      <button
        type="button"
      >
        Log In
      </button>
    </>
  );
}

export default LoginForm;
