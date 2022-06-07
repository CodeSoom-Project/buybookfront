import styled from '@emotion/styled';
import SignUpForm from './SignUpForm';

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

function SignUpPageContainer() {
  return (
    <FormWrapper>
      <SignUpForm />
    </FormWrapper>
  );
}

export default SignUpPageContainer;
