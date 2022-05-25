import styled from '@emotion/styled';

const Input = styled.input`
  padding: 0.93em;
  margin: 0.625em 0;
`;

function FormInput(props) {
  const { placeholder } = props;
  return (
    <div>
      {/* <label>Username</label> */}
      <Input placeholder={placeholder} />
    </div>
  );
}

export default FormInput;
