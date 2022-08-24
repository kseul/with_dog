import styled from 'styled-components';
import { LoginButtonProp } from 'types/type';

const LoginButton = ({ title, color, size }: LoginButtonProp) => {
  return (
    <Button color={color} style={{ width: `${size}rem` }}>
      {title}
    </Button>
  );
};
const Button = styled.button`
  display: block;
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
