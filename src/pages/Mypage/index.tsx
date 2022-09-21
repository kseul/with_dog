import styled, { css } from 'styled-components';
import MBTILETTER_DATA from './DATA/MBTILETTER_DATA';
import bgimg from 'assets/images/bg1.jpg';
import defaultUserImg from 'assets/images/defaultImg.png';
import cameraImg from 'assets/svg/camera.svg';
import editPencil from 'assets/svg/pencil.svg';
import arrowBottom from 'assets/svg/arrow-bottom.svg';

import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import store from 'redux/store';
import userActions from 'redux/actions/user';
import TextEditModal from './components/TextEditModal';

const Mypage = () => {
  const changeMbti = (e: any) => {
    store.dispatch(userActions.setMBTI(e.target.value));
  };

  const userData = useSelector((state: any) => state.user.userData);
  const { name, nickname, email, mbti } = userData;
  console.log(userData);

  return (
    <MypageContainer>
      {/* <TextEditModal /> */}
      <MypageForm>
        <UserImgContainer>
          <UserImg src={defaultUserImg} />
          <EditImgWrapper>
            <EditImg src={cameraImg} />
          </EditImgWrapper>
        </UserImgContainer>
        <UserNamingContainer>
          <UserName>{name}</UserName>
          <UserNickName>
            {nickname}
            <EditNickname src={editPencil} />
          </UserNickName>
        </UserNamingContainer>
        <DogMbtiContainer>
          <Mbti>
            {mbti}
            <ArrowImg src={arrowBottom} />
            <EditMbti onChange={changeMbti}>
              {MBTILETTER_DATA.map(({ id, mbti }) => {
                return <MbtiOption key={id}>{mbti}</MbtiOption>;
              })}
            </EditMbti>
          </Mbti>
          <MbtiNickName>세상이 궁금한 몽상가 댕댕이</MbtiNickName>
        </DogMbtiContainer>
        <UserEmailWrapper>
          <UserEmail>{email}</UserEmail>
        </UserEmailWrapper>
      </MypageForm>
    </MypageContainer>
  );
};

const FontStyle = css`
  font-size: 1.23rem;
  font-weight: 600;
`;
const SortElement = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const EditsMbti = css`
  position: absolute;
  top: 26%;
  right: 12%;
  height: 1.25rem;
`;
const MypageContainer = styled.div`
  ${SortElement}
  height: 100vh;
  padding-top: 4.8rem;
  background-image: url(${bgimg});
  background-size: cover;
`;
const MypageForm = styled.form`
  padding: 1.875rem 5.625rem;
  background-color: white;
  border-radius: 1.25rem;
  box-shadow: 1px 1px 15px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
`;
const UserImgContainer = styled.div`
  position: relative;
  margin: 1.675rem 0;
`;
const UserImg = styled.img`
  border-radius: 70%;
  height: 14rem;
`;
const EditImgWrapper = styled.div`
  position: absolute;
  top: 68%;
  right: -6%;
  ${SortElement}
  width: 5rem;
  height: 5rem;
  background-color: white;
  border-radius: 70%;
  box-shadow: 1px 1px 15px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;
const EditImg = styled.img`
  height: 2.4rem;
`;
const UserNamingContainer = styled.div`
  margin-bottom: 2rem;
`;
const UserName = styled.div`
  margin-bottom: 1.2rem;
  ${FontStyle}
`;
const UserNickName = styled.div`
  position: relative;
  ${FontStyle}
  font-size: 2.8rem;
`;
const EditNickname = styled.img`
  position: absolute;
  top: 30%;
  right: -6%;
  height: 1.25rem;
  cursor: pointer;
`;
const DogMbtiContainer = styled.div`
  margin-bottom: 2.9rem;
`;
const Mbti = styled.div`
  position: relative;
  ${FontStyle}
  font-size: 3.2rem;
  color: ${props => props.theme.colors.mint};
`;
const ArrowImg = styled.img`
  ${EditsMbti}
`;
const EditMbti = styled.select`
  ${EditsMbti}
  opacity: 0;
  cursor: pointer;
`;
const MbtiOption = styled.option``;
const MbtiNickName = styled.div`
  ${FontStyle}
`;
const UserEmailWrapper = styled.div`
  margin-top: 3rem;
  color: gray;
`;
const UserEmail = styled.div`
  ${FontStyle}
  margin-bottom: 0.3rem;
`;

export default Mypage;
