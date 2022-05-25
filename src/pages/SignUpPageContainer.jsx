import styled from '@emotion/styled';
import SignUpPage from './SignUpPage';

const SignForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

function SignUpPageContainer() {
  return (
    <SignForm>
      <SignUpPage />
    </SignForm>
  );
}

export default SignUpPageContainer;
