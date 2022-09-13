import styled from 'styled-components';
import { IdPwInputProp } from 'types/type';

const InputForm = ({
  placeholder,
  type,
  name,
  handleUserInput,
}: IdPwInputProp) => {
  return (
    <UserInputForm
      onChange={handleUserInput}
      placeholder={placeholder}
      type={type}
      name={name}
    />
  );
};
const UserInputForm = styled.input`
  width: 22rem;
  height: 1.875rem;
  margin-bottom: 2.5rem;
  padding-left: 0;
  border: none;
  border-bottom: 1px solid darkgray;
  font-size: 1.063rem;
`;
export default InputForm;
