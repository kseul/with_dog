import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import styled from 'styled-components';
import SecedeButton from './SecedeButton';
import AlertModal from 'pages/components/AlertModal';
import background from 'assets/images/bg1.jpg';

const ForBanUser = () => {
  const navigate = useNavigate();
  const [cookies, , removeCookie] = useCookies(['userToken']);
  const [showButton, setShowButton] = useState(false);
  const [showAlertModal, setShowAlertModal] = useState('');
  const userData = useSelector((state: RootState) => state.user.userData);

  const closeModal = () => {
    setShowButton(!showButton);
  };

  const submitSecede = async () => {
    const response = await fetch(
      `https://togedog-dj.herokuapp.com/users/${userData.id}`,
      {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${cookies.userToken}` },
      }
    );
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

  return (
    <>
      {showAlertModal && (
        <AlertModal
          title={showAlertModal}
          setShowAlertModal={setShowAlertModal}
        />
      )}
      <Container>
        <Title>본 계정은 불건전한 사유로 접근이 거부되었습니다.</Title>
        <Button onClick={closeModal}>회원 탈퇴하기</Button>

        {showButton && (
          <SecedeButton closeModal={closeModal} submitSecede={submitSecede} />
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  ${props => props.theme.flex.flexBox('column')}
  width: 100vw;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
`;

const Title = styled.div`
  font-size: 2.2rem;
  font-weight: 500;
`;

const Button = styled.button`
  position: absolute;
  bottom: 10%;
  right: 5%;
  width: 10rem;
  height: 3rem;
  border-radius: 1rem;
  border: none;
  background-color: ${props => props.theme.colors.purple};
  font-size: 1.2rem;
  color: white;
`;

export default ForBanUser;
