import styled from 'styled-components';
import ArrowRight from 'assets/svg/arrow-right.svg';

const ChatListRight = () => {
  return (
    <GoChatRightContainer>
      <GoChatIntro> 살펴보개 </GoChatIntro>
      <GoChatIntroIcon src={ArrowRight} />
    </GoChatRightContainer>
  );
};

const GoChatRightContainer = styled.div`
  position: relative;
  ${props => props.theme.flex.flexBox('row', 'center', 'center')}
  width: 210px;
  height: 100px;
  background-color: ${props => props.theme.colors.purple};
  border-radius: 0 20px 20px 0;
  transition: background-color 200ms ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.mint};
  }
`;

const GoChatIntro = styled.div`
  margin-right: 22px;
  color: ${props => props.theme.colors.white};
  font-weight: 500;
  font-size: 18px;
`;

const GoChatIntroIcon = styled.img`
  position: absolute;
  top: 39px;
  right: 22px;
  width: 20px;
`;

export default ChatListRight;
