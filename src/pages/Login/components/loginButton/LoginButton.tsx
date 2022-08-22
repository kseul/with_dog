import styled from 'styled-components';
import { LoginButtonProp } from 'types/type';

const LoginButton = ({ title, color }: LoginButtonProp) => {
  return <Button color={color}>{title}</Button>;
};
const Button = styled.button`
  display: block;
  width: 22rem;
  margin-bottom: 1.25rem;
  padding: 0.6rem 0;
  border: none;
  border-radius: 0.625rem;
  background-color: ${({ color }) => color};
  color: white;
  text-align: center;
  font-size: 1.25rem;
`;
export default LoginButton;
