import axios from 'axios';
import styled from 'styled-components';
import { useState } from 'react';
import useAxios from 'hooks/useAxios';
import UserInfoBox from 'pages/Admin/components/RightSection/UserInfoBox';
import { AiOutlineClose } from 'react-icons/ai';
import backgroundImage from 'assets/images/bg1.jpg';

const PostModal = ({ closeModal, modalId }) => {
  const [reason, setReason] = useState<string>('');

  const { response } = useAxios({
    method: 'GET',
    url: `https://togedog-dj.herokuapp.com/posts/${modalId}/admin/`,
    headers: {
      accept: '*/*',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
  });

  const getReason = e => {
    e.preventDefault();
    setReason(e.target.value);
  };

  const deletePost = () => {
    if (window.confirm('게시글을 삭제하시겠습니까?')) {
      axios.post(
        `https://togedog-dj.herokuapp.com/posts/${modalId}/delete/`,
        new URLSearchParams({
          delete_reason: reason,
        }),
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
    } else {
      alert('취소되었습니다.');
    }
  };

  return (
    <ModalBackground onClick={closeModal}>
      {response?.data && (
        <ModalContainer onClick={e => e.stopPropagation()}>
          <ModalTop>
            <ModalTitle>게시글 관리</ModalTitle>
            <DeleteIconButton onClick={closeModal}>
              <AiOutlineClose />
            </DeleteIconButton>
          </ModalTop>
          <ModalContentsWrapper>
            <UserInfo>
              <UserInfoTitle>사용자 정보</UserInfoTitle>
              <UserInfoBox data={response.data} />
            </UserInfo>
            <PostContent>
              <PostContentTitle>
                <PostTitleIndex>게시글 제목</PostTitleIndex>
                <PostTitleBox>{response.data.subject}</PostTitleBox>
              </PostContentTitle>
              <PostText>
                <PostTextIndex>게시글 내용</PostTextIndex>
                <PostTextBox>{response.data.content}</PostTextBox>
              </PostText>
            </PostContent>
            <PostImage>
              <PostBackground>
                <PostImageTitle>게시글 사진</PostImageTitle>
                <PostImageContent>
                  <PostImg src={response.data.image_url} alt="게시글 이미지" />
                </PostImageContent>
              </PostBackground>
            </PostImage>
            <ReasonToBan>
              <ReasonToBanTitle>사유</ReasonToBanTitle>
              <ReasonToBanContent onChange={getReason} />
              <BtnWrapper>
                <CancelBtn
                  onClick={() => {
                    closeModal();
                    deletePost();
                  }}
                >
                  게시글 삭제
                </CancelBtn>
              </BtnWrapper>
            </ReasonToBan>
          </ModalContentsWrapper>
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
  width: 45rem;
  height: 80%;
  max-height: 80%;
  min-height: 40rem;
  background: url(${backgroundImage}) center no-repeat;
  background-size: cover;
`;

const ModalTop = styled.div`
  ${props => props.theme.flex.flexBox('', 'center', 'center')}
  width: 100%;
  height: 3rem;
  background-color: ${props => props.theme.colors.gray};
  border: 2px solid ${props => props.theme.colors.gray};
`;

const ModalTitle = styled.p`
  margin: auto;
  width: 95%;
  text-align: center;
  font-size: 1.5rem;
`;

const DeleteIconButton = styled.button`
  ${props => props.theme.flex.flexBox('row', 'center', '')}
  width: 5%;
  height: 100%;
  border-style: none;
  background: transparent;
  cursor: pointer;
  font-size: 1rem;
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
  margin-bottom: -1px;
  width: 100%;
  height: 1.5rem;
  border: 1px solid black;
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
  margin-top: -1px;
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
  font-family: 'Noto Sans KR', sans-serif;
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
  ${props => props.theme.flex.flexBox('row', 'center', 'center')}
`;

const PostBackground = styled.div`
  ${props => props.theme.flex.flexBox('column', 'center', 'space-evenly')}
  width: 90%;
  height: 90%;
  background-color: ${props => props.theme.colors.lightGray};
  border-radius: 3px;
`;

const PostImageTitle = styled.p``;

const PostImageContent = styled.div`
  position: relative;
  width: 12rem;
  height: 12rem;
`;

const PostImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 3px;
`;

export default PostModal;
