import styled from 'styled-components/macro';
import TitlePaw from 'assets/svg/TitlePawPositoin.svg';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';

const UserCounter = () => {
  const countUser = useSelector((state: RootState) => state.counter);

  return (
    <UserCounterContainer>
      <TitleContainer>
        <TitleIMG src={TitlePaw} />
        <TitleText>함께하개와 함께한 사용자 수</TitleText>
        <TitleIMG src={TitlePaw} />
      </TitleContainer>
      {/* <UserCounterBox>{countUser}</UserCounterBox> */}
    </UserCounterContainer>
  );
};
const UserCounterContainer = styled.div`
  ${props => props.theme.flex.flexBox('column', 'center', 'space-between')};
  margin: 4.5rem 0;
`;

const TitleContainer = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'space-between')};
  width: 25rem;
`;

const TitleIMG = styled.img`
  width: 1.563rem;
`;

const TitleText = styled.span`
  text-align: center;
  color: #333333;
  font-size: 1.563rem;
`;

const UserCounterBox = styled.div``;
export default UserCounter;
