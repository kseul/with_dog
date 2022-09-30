import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import useAxios from 'hooks/useAxios';
import UserInfoBox from 'pages/Admin/components/AdminRightPage/components/UserInfoBox';
import CommentBox from 'pages/Admin/components/Modal/CommentBox';
import API from 'config';
import { AiOutlineClose } from 'react-icons/ai';
import backgroundImage from 'assets/images/bg1.jpg';

const PostModal = ({ detailModalOpener, modalId }) => {
  const [reason, setReason] = useState<string>('');

  const { response } = useAxios({
    method: 'GET',
    url: `${API.ADMINPOST}/${modalId}/admin/`,
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
        `${API.ADMINPOST}/${modalId}/delete/`,
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
    <ModalBackground onClick={detailModalOpener}>
      {response?.data && (
        <ModalContainer onClick={e => e.stopPropagation()}>
          <ModalTop>
            <ModalTitle>게시글 관리</ModalTitle>
            <DeleteIconButton onClick={detailModalOpener}>
              <AiOutlineClose />
            </DeleteIconButton>
          </ModalTop>
          <ModalContentsWrapper>
            <ModalLeftSection>
              <LeftBackground>
                <PostImg src={response.data.image_url} alt="게시글 이미지" />
                <UserInfoBox data={response.data} />
              </LeftBackground>
            </ModalLeftSection>
            <ModalRightSection>
              <PostContent>
                <PostContentTitle>
                  <PostTitle>{response.data.subject}</PostTitle>
                  <PostUpload>
                    {response.data.created_at.substring(0, 10)}
                  </PostUpload>
                  <PostText>{response.data.content}</PostText>
                </PostContentTitle>
              </PostContent>
              <CommentList>
                {response?.data.comments_list.length === 0 ? (
                  <p>등록된 댓글이 없습니다.</p>
                ) : (
                  response?.data.comments_list.map(comment => (
                    <CommentBox key={comment.id} comment={comment} />
                  ))
                )}
              </CommentList>
              <ReasonToBan>
                <ReasonToBanContent
                  placeholder="삭제 사유를 입력하여 주세요."
                  onChange={getReason}
                />
                <BtnWrapper>
                  <CancelBtn
                    onClick={() => {
                      detailModalOpener();
                      deletePost();
                    }}
                  >
                    게시글 삭제
                  </CancelBtn>
                </BtnWrapper>
              </ReasonToBan>
            </ModalRightSection>
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
  width: 60rem;
  height: 80%;
  min-height: 40rem;
  background: url(${backgroundImage}) center no-repeat;
  background-size: cover;
  border-radius: 3px;
  z-index: 7;
`;

const ModalTop = styled.div`
  ${props => props.theme.flex.flexBox('', 'center', 'center')}
  width: 100%;
  height: 3rem;
  background-color: ${props => props.theme.colors.gray};
  border: 1px solid ${props => props.theme.colors.gray};
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
  width: 100%;
  height: calc(100% - 3rem);
`;

const ModalLeftSection = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const LeftBackground = styled.div`
  position: absolute;
  ${props => props.theme.flex.flexBox('column', 'center', 'space-evenly')}
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.lightGray};
  border-top-right-radius: 1.875rem;
  border-bottom-right-radius: 1.875rem;
  box-shadow: 5px 0px 5px lightGray;
`;

const PostImg = styled.img`
  width: 90%;
  height: 50%;
  max-height: 60%;
`;

const ModalRightSection = styled.div`
  ${props => props.theme.flex.flexBox('column', '', 'space-evenly')}
  width: 100%;
  height: 100%;
`;

const PostContent = styled.div`
  margin-top: 2rem;
  width: 90%;
  height: 8%;
`;

const PostContentTitle = styled.div`
  ${props => props.theme.flex.flexBox('column', '', '')}
  margin-left: 1rem;
  width: 100%;
  height: 30%;
`;

const PostTitle = styled.div`
  width: 70%;
  font-size: 1.5rem;
`;

const PostUpload = styled.div`
  color: rgb(124, 124, 124);
  font-size: 0.7rem;
  border-bottom: 1px solid gray;
`;

const PostText = styled.div`
  padding-top: 0.5rem;
  width: 70%;
  height: 3.5rem;
`;

const CommentList = styled.div`
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  height: 13rem;
  overflow-y: auto;
`;

const ReasonToBan = styled.div`
  margin-top: 2rem;
  ${props => props.theme.flex.flexBox('column', '', 'space-evenly')}
`;

const ReasonToBanContent = styled.textarea`
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  height: 8rem;
  resize: none;
  font-family: 'Noto Sans KR', sans-serif;
`;

const BtnWrapper = styled.div`
  margin: 1rem auto;
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

export default PostModal;
