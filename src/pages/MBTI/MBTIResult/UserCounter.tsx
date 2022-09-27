import styled from 'styled-components/macro';
import { CountUp } from './CountUp';
import TitlePaw from 'assets/svg/TitlePawPositoin.svg';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { Counter } from './type';
import { useEffect, useState } from 'react';
import { CountUser } from './type';

const UserCounter = () => {
  const [count, setCount] = useState<any>();
  console.log(count);

  const counterUser: string = Object.values(count)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // const getNum = () => {
  //   fetch(`https://togedog-dj.herokuapp.com/test-count`, {
  //     method: 'GET',
  //   })
  //     .then(response => response.json())
  //     .then(result => {
  //       setCount(result);
  //     });
  // };

  // useEffect(() => {
  //   getNum();
  // }, []);

  const counterUserRedux: Counter = useSelector(
    (state: RootState) => state.counter
  );

  return (
    <UserCounterContainer>
      <TitleContainer>
        <TitleIMG src={TitlePaw} />
        <TitleText>함께하개와 함께한 사용자 수</TitleText>
        <TitleIMG src={TitlePaw} />
      </TitleContainer>
      <UserCounterBox>
        <UserCountNumber>{counterUser}</UserCountNumber>
        <OfUser>명의 사용자</OfUser>
      </UserCounterBox>
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

const UserCounterBox = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'center')};
`;

const UserCountNumber = styled.span`
  margin-top: 2.5rem;
  text-align: center;
  color: #333333;
  font-size: 1.7rem;
  font-weight: 500;
`;

const OfUser = styled.span`
  margin: 2.5rem 0 0 0.5rem;

  text-align: center;
  color: #333333;
  font-size: 1.3rem;
  font-weight: 300;
`;

export default UserCounter;
