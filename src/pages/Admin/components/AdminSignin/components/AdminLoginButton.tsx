import styled from 'styled-components';

const LoginButton = ({ title, color, size, submitSigninInfo }) => {
  return (
    <Button
      color={color}
      style={{ width: `${size}rem` }}
      onClick={e => submitSigninInfo(e)}
    >
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
