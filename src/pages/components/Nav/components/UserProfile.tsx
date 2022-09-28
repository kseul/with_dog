import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import styled from 'styled-components';
import API from 'config';

const UserProfile = () => {
  const navigate = useNavigate();
  const modalEl = useRef<any>();
  const userData = useSelector((state: RootState) => state.user.userData);
  const { nickname, thumbnail_url } = userData;
  const [profileModal, setProfileModal] = useState(false);
  const [cookies, , removeCookie] = useCookies(['userToken']);

  const goToMyPage = () => {
    navigate('/mypage');
  };

  const closeModal = useCallback(
    e => {
      if (profileModal && !modalEl.current.contains(e.target)) {
        setProfileModal(false);
      }
    },
    [profileModal]
  );

  const handleLogOut = async () => {
    try {
      await axios.get(`${API.LOGOUT}`, {
        headers: { Authorization: `Bearer ${cookies.userToken}` },
      });
      sessionStorage.clear();
      removeCookie('userToken', { path: '/' });
      window.location.replace('/');
    } catch (error) {
      alert('로그아웃 실패하였습니다.');
    }
  };

  useEffect(() => {
    window.addEventListener('click', closeModal);
    return () => {
      window.removeEventListener('click', closeModal);
    };
  }, [closeModal, profileModal]);

  return (
    <UserProfileContainer ref={modalEl}>
      <UserImgWrapper>
        <UserImg src={thumbnail_url} />
      </UserImgWrapper>
      <UserNickName
        onClick={() => {
          setProfileModal(!profileModal);
        }}
      >
        {nickname}
      </UserNickName>
      {profileModal ? (
        <ProfileModal>
          <ModalContent onClick={goToMyPage} bottom={false}>
            마이 페이지
          </ModalContent>
          <ModalContent onClick={handleLogOut} bottom={true}>
            로그아웃
          </ModalContent>
        </ProfileModal>
      ) : null}
    </UserProfileContainer>
  );
};

const UserProfileContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 4rem;
`;

const UserImgWrapper = styled.div`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 70%;
  overflow: hidden;
`;

const UserImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const UserNickName = styled.div`
  padding-left: 0.625rem;
  border-radius: 1rem;
  font-size: 1.15rem;
  font-weight: 400;
  cursor: pointer;
`;

const ProfileModal = styled.div`
  position: absolute;
  top: 110%;
  left: 0%;
  width: 8.1rem;
  background-color: white;
  border: 1px solid #aeb5bc;
  border-radius: 0.6rem;
  font-size: 0.9rem;
  text-align: center;
`;

const ModalContent = styled.div<{
  bottom: boolean;
}>`
  padding: 0.9rem 1.25rem;
  border-top-left-radius: ${props => (props.bottom ? null : '0.6rem')};
  border-top-right-radius: ${props => (props.bottom ? null : '0.6rem')};
  border-bottom-left-radius: ${props => (props.bottom ? '0.6rem' : null)};
  border-bottom-right-radius: ${props => (props.bottom ? '0.6rem' : null)};
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.mint};
    color: white;
  }
`;

export default UserProfile;
