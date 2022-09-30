import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import store from 'redux/store';
import userActions from 'redux/actions/user';
import styled from 'styled-components';
import UserImgSection from './components/UserImgSection';
import UserNamingSection from './components/UserNamingSection';
import MbtiSection from './components/MbtiSection';
import UserEmailSection from './components/UserEmailSection';
import NickNameEditModal from './components/NickNameEditModal';
import AlertModal from 'pages/components/AlertModal';
import SecedeButton from 'pages/Login/SignIn/components/SecedeButton';
import API from 'config';
import bgimg from 'assets/images/bg1.jpg';

const Mypage = () => {
  const navigate = useNavigate();
  const [showEditMoal, setShowEditModal] = useState(false);
  const [showAlertModal, setShowAlertModal] = useState('');
  const [lengthLimit, setLengthLimit] = useState(false);
  const [validkNickname, setValidNickname] = useState(false);
  const [changedNickname, setChangedNickname] = useState('');
  const [showButton, setShowButton] = useState(false);
  const [cookies, , removeCookie] = useCookies(['userToken']);

  const formData = new FormData();

  const userData = useSelector((state: RootState) => state.user.userData);
  const { name, nickname, email, mbti, thumbnail_url, id } = userData;

  const openEditModal = () => {
    setShowEditModal(true);
  };
  const option = {
    url: `${API.USERS}${id}`,
    method: 'PATCH',
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${cookies.userToken}`,
    },
    data: formData,
  };

  const submitChangedMbti = async e => {
    try {
      formData.append('mbti', e.target.value);
      await axios(option);
      setShowAlertModal('MBTI 변경이 완료되었습니다.');
      store.dispatch(userActions.setMBTI(e.target.value));
    } catch (error) {
      setShowAlertModal('MBTI 변경에 실패하였습니다.');
    }
  };

  const submitChangedUserImage = async e => {
    try {
      formData.append('file', e.target.files[0]);
      const response = await axios(option);
      setShowAlertModal('프로필 사진이 변경되었습니다.');
      store.dispatch(
        userActions.setUserImage(response.data.user_thumbnail_url)
      );
    } catch (error) {
      setShowAlertModal('프로필 사진 변경에 실패하였습니다.');
    }
  };

  const closeModal = () => {
    setShowButton(!showButton);
  };

  const submitChangedNickname = async () => {
    try {
      if (validkNickname) {
        formData.append('nickname', changedNickname);
        await axios(option);
        setShowAlertModal('닉네임 변경이 완료되었습니다.');
        store.dispatch(userActions.changeNickname(changedNickname));
      }
    } catch (error: any) {
      if (error.response.status === 400) {
        setShowAlertModal('부적절한 단어가 사용되었습니다.');
      } else {
        setShowAlertModal('닉네임 변경에 실패하였습니다.');
      }
    } finally {
      setShowEditModal(false);
    }
  };

  const submitSecede = async () => {
    const response = await fetch(`${API.USERS}${userData.id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${cookies.userToken}` },
    });
    if (response.status === 200) {
      setShowButton(false);
      sessionStorage.clear();
      removeCookie('userToken', { path: '/' });
      setShowAlertModal('회원탈퇴가 정상적으로 처리되었습니다.');
      setTimeout(() => {
        navigate('/signin');
      }, 1000);
    } else {
      setShowButton(false);
      setShowAlertModal('회원탈퇴에 실패하였습니다.');
    }
  };

  useEffect(() => {
    if (nickname.length > 6) {
      setLengthLimit(true);
    } else {
      setLengthLimit(false);
    }
  }, [nickname]);

  return (
    <MypageContainer>
      {showEditMoal && (
        <NickNameEditModal
          setShowEditModal={setShowEditModal}
          submitChangedNickname={submitChangedNickname}
          validkNickname={validkNickname}
          setValidNickname={setValidNickname}
          setChangedNickname={setChangedNickname}
        />
      )}
      {showAlertModal && (
        <AlertModal
          title={showAlertModal}
          setShowAlertModal={setShowAlertModal}
        />
      )}
      <MypageForm>
        <UserImgSection
          submitChangedUserImage={submitChangedUserImage}
          thumbnail_url={thumbnail_url}
        />
        <UserNamingSection
          name={name}
          nickname={nickname}
          lengthLimit={lengthLimit}
          openEditModal={openEditModal}
        />
        <MbtiSection mbti={mbti} submitChangedMbti={submitChangedMbti} />
        <UserEmailSection email={email} />
      </MypageForm>
      <ButtonContainer onClick={closeModal}>회원 탈퇴하기</ButtonContainer>
      {showButton && (
        <SecedeButton closeModal={closeModal} submitSecede={submitSecede} />
      )}
    </MypageContainer>
  );
};

const MypageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 110vh;
  padding-top: 2.5rem;
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

const ButtonContainer = styled.button`
  position: absolute;
  bottom: 5%;
  right: 4%;
  width: 10rem;
  height: 3rem;
  border-radius: 1rem;
  border: none;
  background-color: ${props => props.theme.colors.purple};
  font-size: 1.2rem;
  color: white;
`;

export default Mypage;
