import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ToMbtiButtonProp } from 'types/type';

const ToMbtiButton = ({
  title,
  icon,
  textColor,
  buttonColor,
  buttonSize,
  textSize,
}: ToMbtiButtonProp) => {
  const navigate = useNavigate();
  const goToMbtiTest = () => {
    navigate('/mbti');
  };

  return (
    <Container
      color={buttonColor}
      style={{ width: `${buttonSize}rem` }}
      onClick={goToMbtiTest}
    >
      <ButtonImg src={icon} />
      <ButtonText color={textColor} style={{ fontSize: `${textSize}px` }}>
        {title}
      </ButtonText>
    </Container>
  );
};

const Container = styled.button`
  position: relative;
  padding: 10px 0;
  border: none;
  border-radius: 30px;
  background-color: ${({ color }) => color};
`;

const ButtonImg = styled.img`
  position: absolute;
  left: 10%;
  height: 24px;
`;

const ButtonText = styled.div`
  padding-left: 25px;
  color: ${({ color }) => color};
`;

export default ToMbtiButton;
