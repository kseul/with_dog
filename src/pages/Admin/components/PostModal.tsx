import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import UserInfoBox from 'pages/Admin/components/UserInfoBox';

const PostModal = ({ closeModal }) => {
  return (
    <ModalBackground onClick={closeModal}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalTop>
          <DeleteIconButton onClick={closeModal}>
            <AiOutlineClose />
          </DeleteIconButton>
        </ModalTop>
        <ModalTitle>게시글 관리</ModalTitle>
        <ModalContentsWrapper>
          <UserInfo>
            <UserInfoTitle>사용자 정보</UserInfoTitle>
            <UserInfoBox />
          </UserInfo>
          <PostContent>
            <PostContentTitle>
              <PostTitleIndex>게시글 제목</PostTitleIndex>
              <PostTitleBox>제목이 들어올 자리</PostTitleBox>
            </PostContentTitle>
            <PostText>
              <PostTextIndex>게시글 내용</PostTextIndex>
              <PostTextBox>게시된 내용이 들어올 자리</PostTextBox>
            </PostText>
          </PostContent>
          <PostImage>
            <PostImageTitle>게시글 사진</PostImageTitle>
            <PostImageContent>사진 들어가유</PostImageContent>
          </PostImage>
          <ReasonToBan>
            <ReasonToBanTitle>사유</ReasonToBanTitle>
            <ReasonToBanContent />
            <BtnWrapper>
              <CancelBtn onClick={closeModal}>게시글 삭제</CancelBtn>
            </BtnWrapper>
          </ReasonToBan>
        </ModalContentsWrapper>
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
  width: 45rem;
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

const ModalTitle = styled.p`
  padding-top: 0.5rem;
  padding-left: 1rem;
`;

const ModalContentsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: calc(100% - 4.5rem);
`;

const UserInfoTitle = styled.p``;

const UserInfo = styled.div`
  margin-top: 1rem;
  margin-left: 1rem;
`;

const PostContent = styled.div`
  margin-top: 2rem;
  width: 90%;
`;

const PostContentTitle = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', '')}
  width: 100%;
  height: 1.5rem;
  border: 1px solid black;
  margin-bottom: -1px;
`;

const PostTitleIndex = styled.div`
  padding-top: 0.2rem;
  width: 30%;
  height: 100%;
  background-color: ${props => props.theme.colors.lightGray};
  border-right: 1px solid black;
  text-align: center;
`;

const PostTitleBox = styled.div`
  width: 70%;
  padding-left: 0.5rem;
`;

const PostText = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', '')}
  margin-bottom: -1px;
  width: 100%;
  height: 50%;
  border: 1px solid black;
`;

const PostTextIndex = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'center')}
  width: 30%;
  height: 100%;
  background-color: ${props => props.theme.colors.lightGray};
  border-right: 1px solid black;
`;

const PostTextBox = styled.div`
  width: 70%;
  padding-left: 0.5rem;
`;

const ReasonToBan = styled.div`
  ${props => props.theme.flex.flexBox('column', '', 'space-evenly')}
`;

const ReasonToBanTitle = styled.p`
  padding-top: 1rem;
`;

const ReasonToBanContent = styled.textarea`
  width: 90%;
  height: 50%;
  resize: none;
`;

const BtnWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: rem;
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

const PostImage = styled.div`
  ${props => props.theme.flex.flexBox('column', 'center', 'space-evenly')}
`;

const PostImageTitle = styled.p`
  padding-bottom: 0.3rem;
`;

const PostImageContent = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid black;
`;

export default PostModal;
