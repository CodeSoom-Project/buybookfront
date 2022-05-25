import { useCallback, useState } from 'react';
import FormInput from '../components/FormInput';
import useInput from '../hooks/useInput';

function SignUpPage() {
  const [passwordCheck, setPasswordCheck] = useState('');
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
  }, [password, passwordCheck, term]);

  const onChangePasswordCheck = useCallback((e) => {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  }, [password]);

  const onChangeTerm = useCallback((e) => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);

  return (
    <form>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <FormInput name="user-id" value={id} onChange={onChangeId} />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <FormInput name="user-password" type="password" value={password} onChange={onChangePassword} />
      </div>
      <div>
        <label htmlFor="user-password-check">비밀번호체크</label>
        <br />
        <FormInput
          name="user-password-check"
          type="password"
          value={passwordCheck}
          onChange={onChangePasswordCheck}
        />
        {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
      </div>
      <div>
        <label>
          <input type="checkbox" name="user-term" checked={term} onChange={onChangeTerm} />
          {' '}
          규칙을 잘 지킬 것을 동의합니다.
        </label>
        {termError && <div style={{ color: 'red' }}>약관에 동의하셔야 합니다.</div>}
      </div>
      <div style={{ marginTop: 10 }}>
        <button type="button">가입하기</button>
      </div>
    </form>
  );
}

export default SignUpPage;
