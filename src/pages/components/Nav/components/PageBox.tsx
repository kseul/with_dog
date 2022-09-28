import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface PageBoxProps {
  title: string;
  moveTo: string;
  checkLoggedIn: boolean;
  setShowAlertModal: (arg: string) => void;
}

const PageBox = ({
  title,
  moveTo,
  checkLoggedIn,
  setShowAlertModal,
}: PageBoxProps) => {
  const navigate = useNavigate();
  const goToPages = () => {
    switch (title) {
      case 'MBTI 검사':
        navigate(moveTo);
        break;
      case '채팅방':
        if (checkLoggedIn) {
          navigate(moveTo);
        } else {
          setShowAlertModal('로그인이 필요한 서비스입니다.');
        }
        break;
      case '게시판':
        if (checkLoggedIn) {
          navigate(moveTo);
        } else {
          setShowAlertModal('로그인이 필요한 서비스입니다.');
        }

        break;
      case '산책하개':
        setShowAlertModal('서비스 구현중입니다.');
        break;
      default:
        break;
    }
  };

  return <PageBoxContainer onClick={goToPages}>{title}</PageBoxContainer>;
};

const PageBoxContainer = styled.div`
  position: relative;
  width: 6.875rem;
  font-size: 1.188rem;
  text-align: center;
  cursor: pointer;

  ::after {
    content: '';
    position: absolute;
    bottom: -50%;
    left: 50%;
    transform: translateX(-50%);
    width: 0%;
    height: 0.15rem;
    background-color: ${props => props.theme.colors.mint};
    transition: all 0.5s ease-out;
  }

  &:hover::after {
    width: 60%;
  }
`;

export default PageBox;
