import styled from 'styled-components';
import ArrowLeft from 'assets/svg/arrow-left2.svg';

const TitleBar = () => {
  // room 가져오기
  return (
    <TitleBarContainer>
      <BackBox>
        <GoBackIcon src={ArrowLeft} />
        <GoBackText>뒤로가기</GoBackText>
      </BackBox>
      <Title>방이름</Title>
    </TitleBarContainer>
  );
};

const TitleBarContainer = styled.div`
  ${props => props.theme.flex.flexBox()}
  width: 100%;
  height: 5rem;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const Title = styled.div`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.boldGray};
`;

const BackBox = styled.div`
  ${props => props.theme.flex.flexBox()}
  position: absolute;
  width: 10rem;
  left: 0.5rem;

  &:hover {
    cursor: pointer;
  }
`;

const GoBackIcon = styled.img`
  width: 0.8rem;
  margin-right: 0.8rem;
`;

const GoBackText = styled.div`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.boldGray};
`;

export default TitleBar;
