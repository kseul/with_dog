import styled from 'styled-components';

interface LoginBUttonProps {
  title: string;
  color: string;
  size: number;
  isActive: boolean;
  func: () => void;
}

const LoginButton = ({
  title,
  color,
  size,
  isActive,
  func,
}: LoginBUttonProps) => {
  return (
    <Button
      color={color}
      style={{ width: `${size}rem` }}
      disabled={!isActive}
      onClick={func}
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
  opacity: ${props => (props.disabled ? 0.6 : 1)};
`;
export default LoginButton;
