import styled from '@emotion/styled';
import LoginForm from './LoginForm';
import useInput from '../hooks/useInput';

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default function LoginFormPage() {
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');

  return (
    <FormWrapper>
      <LoginForm
        id={id}
        onChangeId={onChangeId}
        password={password}
        onChangePassword={onChangePassword}
      />
    </FormWrapper>
  );
}
