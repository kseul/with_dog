import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

const UserModal = ({ closeModal }) => {
  return (
    <ModalBackground onClick={closeModal}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalTop>
          <DeleteIconButton onClick={closeModal}>
            <AiOutlineClose />
          </DeleteIconButton>
        </ModalTop>
        <ModalContents>
          <ProfileImage></ProfileImage>
          <UserName>안성주</UserName>
          <UserNickName>안론머스크</UserNickName>
          <Mbti>ENFJ</Mbti>
          <MbtiText>활기찬 강아지</MbtiText>
          <UserEmail>sungjubabo@gmail.com</UserEmail>
          <UserAddress>경기도 서울시 부산구 대구동 73</UserAddress>
          <BtnContainer>
            <CancelBtn onClick={closeModal}>계정 삭제</CancelBtn>
          </BtnContainer>
        </ModalContents>
      </ModalContainer>
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
  background-color: #fff;
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

const ProfileImage = styled.div`
  width: 9.375rem;
  height: 9.375rem;
  border: 1px solid black;
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
  font-size: 0.7rem;
`;

const UserAddress = styled.p`
  font-size: 0.7rem;
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
