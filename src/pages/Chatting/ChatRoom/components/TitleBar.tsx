import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import ArrowLeft from 'assets/svg/arrow-left2.svg';

const TitleBar = () => {
  const navigate = useNavigate();

  const goToChatList = () => {
    navigate('/chatting-list');
  };

  const roomName: any = useSelector<RootState>(state => state.chat.title);

  return (
    <TitleBarContainer>
      <BackBox onClick={goToChatList}>
        <GoBackIcon src={ArrowLeft} />
        <GoBackText>채팅목록</GoBackText>
      </BackBox>
      <Title>{roomName}</Title>
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

const BackBox = styled.button`
  ${props => props.theme.flex.flexBox()}
  position: absolute;
  width: 10rem;
  left: 0.5rem;
  border: none;
  background-color: white;
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
