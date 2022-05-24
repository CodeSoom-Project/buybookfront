const LoginForm = (() => {

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
          value=''
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
          value=''
        />
      </form>
      <button
        type="button"
      >
        Log In
      </button>
    </>
  );
});

export default LoginForm;
