import styled from '@emotion/styled';
import SignUpPage from './SignUpPage';

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

function SignUpPageContainer() {
  return (
    <FormWrapper>
      <SignUpPage />
    </FormWrapper>
  );
}

export default SignUpPageContainer;
