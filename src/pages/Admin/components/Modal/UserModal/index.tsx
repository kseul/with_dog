import { useLocation } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import useAxios from 'hooks/useAxios';
import API from 'config';
import { AiOutlineClose } from 'react-icons/ai';
import backgroundImage from 'assets/images/bg1.jpg';

const UserModal = ({ modalId, detailModalOpener }) => {
  const location = useLocation();

  const { response } = useAxios({
    method: 'GET',
    url: `${API.ADMINUSER}/${modalId}`,
    headers: {
      accept: '*/*',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
  });

  const banUser = () => {
    if (window.confirm('계정을 차단하시겠습니까?')) {
      axios.patch(
        `${API.ADMINUSER}/${modalId}/ban`,
        {},
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        }
      );
    } else {
      alert('취소되었습니다.');
    }
  };

  const deleteUser = () => {
    if (window.confirm('계정을 삭제하시겠습니까?')) {
      axios.delete(`${API.ADMINUSER}/${modalId}/ban`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      });
    } else {
      alert('취소되었습니다.');
    }
  };

  const cancelBtn = () => {
    switch (location.pathname) {
      case '/admin/users':
        return (
          <CancelBtn
            onClick={() => {
              banUser();
              detailModalOpener();
            }}
          >
            계정 차단
          </CancelBtn>
        );
      case '/admin/users/banned/all':
        return (
          <CancelBtn
            onClick={() => {
              deleteUser();
              detailModalOpener();
            }}
          >
            계정 삭제
          </CancelBtn>
        );
    }
  };

  return (
    <ModalBackground onClick={detailModalOpener}>
      {response?.data && (
        <ModalContainer onClick={e => e.stopPropagation()}>
          <ModalTop>
            <DeleteIconButton onClick={detailModalOpener}>
              <AiOutlineClose />
            </DeleteIconButton>
          </ModalTop>
          <ModalContents>
            <ProfileImage src={response.data.thumbnail_url} />
            <UserName>{response.data.name}</UserName>
            <UserNickName>{response.data.nickname}</UserNickName>
            <Mbti>{response.data.mbti}</Mbti>
            <MbtiText>{response.data.mbti}</MbtiText>
            <UserEmail>{response.data.email}</UserEmail>
            <BtnContainer>{cancelBtn()}</BtnContainer>
          </ModalContents>
        </ModalContainer>
      )}
    </ModalBackground>
  );
};

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(68, 68, 68, 0.9);
  z-index: 5;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 35rem;
  height: 80%;
  max-height: 80%;
  background: url(${backgroundImage}) center no-repeat;
  background-size: cover;
`;

const ModalTop = styled.div`
  width: 100%;
  height: 3rem;
  background-color: ${props => props.theme.colors.gray};
  border: 2px solid ${props => props.theme.colors.gray};
`;

const DeleteIconButton = styled.button`
  ${props => props.theme.flex.flexBox('row', 'center', '')}
  margin-left : auto;
  height: 100%;
  border-style: none;
  background: transparent;
  cursor: pointer;
  font-size: 1rem;
`;

const ModalContents = styled.div`
  ${props => props.theme.flex.flexBox('column', 'center', 'space-evenly')}
  height: calc(100% - 3rem);
`;

const ProfileImage = styled.img`
  width: 9.375rem;
  height: 9.375rem;
  border-radius: 50%;
`;

const UserName = styled.p`
  font-size: 0.9rem;
`;

const UserNickName = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Mbti = styled.p`
  font-size: 2rem;
  color: #60bae1;
`;

const MbtiText = styled.p`
  font-size: 1rem;
`;

const UserEmail = styled.p`
  font-size: 1rem;
`;

const BtnContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 20%;
`;

const CancelBtn = styled.button`
  width: 100%;
  height: 2rem;
  border-radius: 3px;
  border: 1px solid black;
  background-color: black;
  color: #ffff;
  cursor: pointer;
`;

export default UserModal;
