import styled from 'styled-components';
import { useSelector } from 'react-redux';
import store from 'redux/store';
import userActions from 'redux/actions/user';
import { useState } from 'react';
import UserImgSection from './components/UserImgSection';
import UserNamingSection from './components/UserNamingSection';
import MbtiSection from './components/MbtiSection';
import UserEmailSection from './components/UserEmailSection';
import NickNameEditModal from './components/NickNameEditModal';
import AlertModal from 'pages/components/AlertModal';
import bgimg from 'assets/images/bg1.jpg';

const Mypage = () => {
  const [showEditMoal, setShowEditModal] = useState(false);
  const [showAlertModal, setShowAlertModal] = useState('');
  const [lengthLimit, setLengthLimit] = useState(false);
  const [validkNickname, setValidNickname] = useState(false);
  const [changedNickname, setChangedNickname] = useState('');

  const formData = new FormData();

  const userData = useSelector((state: any) => state.user.userData);
  const { name, nickname, email, mbti, thumbnail_url, id } = userData;

  const openEditModal = () => {
    setShowEditModal(true);
  };

  const changeMbti = e => {
    formData.append('mbti', e.target.value);
    fetch(`https://togedog-dj.herokuapp.com/users/${userData.id}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjo5LCJ1c2VyX3R5cGUiOiJhZG1pbiIsImV4cCI6MTY2NDY4NTQ5MiwiaWF0IjoxNjYyMDkzNDkyfQ.AQAciBT2VhdUDY-rQuoRiJCXE3BfIQJd95KgCXk0eKU`,
      },
      body: formData,
    }).then(res => {
      if (res.status === 200) {
        store.dispatch(userActions.setMBTI(e.target.value));
        setShowAlertModal('MBTI 변경이 완료되었습니다.');
      }
    });
  };

  const changeUserImage = e => {
    formData.append('file', e.target.files[0]);
    fetch(`https://togedog-dj.herokuapp.com/users/${userData.id}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjo5LCJ1c2VyX3R5cGUiOiJhZG1pbiIsImV4cCI6MTY2NDY4NTQ5MiwiaWF0IjoxNjYyMDkzNDkyfQ.AQAciBT2VhdUDY-rQuoRiJCXE3BfIQJd95KgCXk0eKU`,
      },
      body: formData,
    })
      .then(res => {
        if (res.status === 200) {
          setShowAlertModal('프로필 사진이 변경되었습니다.');
          return res.json();
        }
      })
      .then(result => {
        store.dispatch(userActions.setUserImage(result.user_thumbnail_url));
      });
  };

  const submitChangedNickname = () => {
    if (validkNickname) {
      formData.append('nickname', changedNickname);
      fetch(`https://togedog-dj.herokuapp.com/users/${id}`, {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjo5LCJ1c2VyX3R5cGUiOiJhZG1pbiIsImV4cCI6MTY2NDY4NTQ5MiwiaWF0IjoxNjYyMDkzNDkyfQ.AQAciBT2VhdUDY-rQuoRiJCXE3BfIQJd95KgCXk0eKU`,
        },
        body: formData,
      }).then(res => {
        if (res.status === 200) {
          if (changedNickname.length > 6) {
            setLengthLimit(true);
          } else {
            setLengthLimit(false);
          }
          store.dispatch(userActions.changeNickname(changedNickname));
          setShowAlertModal('닉네임 변경이 완료되었습니다.');
          return res.json();
        } else if (res.status === 400) {
          setShowAlertModal('부적절한 단어가 사용되었습니다.');
        }
      });
    }
    setShowEditModal(false);
  };

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
          changeUserImage={changeUserImage}
          thumbnail_url={thumbnail_url}
        />
        <UserNamingSection
          name={name}
          nickname={nickname}
          lengthLimit={lengthLimit}
          openEditModal={openEditModal}
        />
        <MbtiSection mbti={mbti} changeMbti={changeMbti} />
        <UserEmailSection email={email} />
      </MypageForm>
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

export default Mypage;
