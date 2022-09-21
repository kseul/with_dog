import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { PageBoxProp } from 'types/type';

const PageBox = ({ title, moveTo }: PageBoxProp) => {
  const navigate = useNavigate();
  const goToPages = () => {
    navigate(moveTo);
  };

  return <PageBoxContainer onClick={goToPages}>{title}</PageBoxContainer>;
};

const PageBoxContainer = styled.div`
  position: relative;
  width: 6.875rem;
  padding-left: 1.875rem;
  font-size: 1.188rem;
  text-align: center;
  cursor: pointer;

  ::after {
    content: '';
    position: absolute;
    bottom: -50%;
    left: 63%;
    transform: translateX(-50%);
    width: 0%;
    height: 0.15rem;
    background-color: ${props => props.theme.colors.mint};
    transition: all 0.5s ease-out;
  }

  &:hover::after {
    width: 62%;
  }
`;

export default PageBox;
