import axios from 'axios';
import styled from 'styled-components';
import useAxios from 'hooks/useAxios';
import UserInfoBox from 'pages/Admin/components/AdminRightPage/components/UserInfoBox';
import API from 'config';
import { AiOutlineClose } from 'react-icons/ai';
import backgroundImage from 'assets/images/bg1.jpg';

const DeletedPostModal = ({ detailModalOpener, modalId }) => {
  const { response } = useAxios({
    method: 'GET',
    url: `${API.ADMINPOST}/deleted/${modalId}/`,
    headers: {
      accept: '*/*',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
  });

  const deletePost = () => {
    if (window.confirm('게시글을 완전히 삭제하시겠습니까?')) {
      axios.delete(`${API.ADMINPOST}/${modalId}/delete/hard`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      });
    } else {
      alert('취소되었습니다.');
    }
  };
  return (
    <ModalBackground onClick={detailModalOpener}>
      {response?.data && (
        <ModalContainer onClick={e => e.stopPropagation()}>
          <ModalTop>
            <ModalTitle>삭제된 게시글 관리</ModalTitle>
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
                  <PostText>{response.data.content}</PostText>
                </PostContentTitle>
              </PostContent>
              <ReasonToBan>
                <ReasonToBanContent>
                  {response?.data.delete_reason}
                </ReasonToBanContent>
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
  background-image: linear-gradient(to left, #bdbbbe 0%, #9d9ea3 100%),
    radial-gradient(
      88% 271%,
      rgba(255, 255, 255, 0.25) 0%,
      rgba(254, 254, 254, 0.25) 1%,
      rgba(0, 0, 0, 0.25) 100%
    ),
    radial-gradient(
      50% 100%,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(0, 0, 0, 0.3) 100%
    );
  background-blend-mode: normal, lighten, soft-light;
  border-top-right-radius: 1.875rem;
  border-bottom-right-radius: 1.875rem;
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
  height: 40%;
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

const PostText = styled.div`
  padding-top: 0.5rem;
  width: 70%;
  height: 3.5rem;
`;

const ReasonToBan = styled.div`
  margin-top: 2rem;
  ${props => props.theme.flex.flexBox('column', '', 'space-evenly')}
`;

const ReasonToBanContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  width: 90%;
  height: 8rem;
  border: 1px solid black;
  border-radius: 3px;
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

export default DeletedPostModal;
