import axios from 'axios';
import styled from 'styled-components';
import { useCookies } from 'react-cookie';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import store from 'redux/store';
import userActions from 'redux/actions/user';
import LoginInputForm from './components/LoginInputForm';
import AlertModal from 'pages/components/AlertModal';
import { KAKAO_AUTH_PATH } from './kakaoLogin/KakaoLoginData';
import { GOOGLE_AUTH_PATH } from './googleLogin/GoogleloginData';
import signInbg from 'assets/images/bg1.jpg';
import character from 'assets/images/LoginBgCharacter.png';

const SignIn = () => {
  const navigate = useNavigate();
  const [, setCookie] = useCookies(['userToken']);
  const [showAlertModal, setShowAlertModal] = useState('');
  const [userInputValue, setUserInputValue] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userInputValue;

  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_PATH;
  };
  const handleGoogleLogin = () => {
    window.location.href = GOOGLE_AUTH_PATH;
  };

  const handleUserInput = e => {
    const { name, value } = e.target;
    setUserInputValue({ ...userInputValue, [name]: value });
  };

  const isActive = useMemo(() => {
    return (
      email.includes('@') && email.includes('.') && password.length > 7 === true
    );
  }, [email, password]);

  const expires = new Date();
  expires.setMinutes(expires.getMinutes() + 60);

  const submitSigninInfo = async () => {
    if (isActive) {
      try {
        const response = await axios.post(
          'https://togedog-dj.herokuapp.com/users/login/email',
          {
            email: email,
            password: password,
          },
          { withCredentials: true }
        );
        const userData = response.data.user;
        const accessToken = response.data.access_token;
        store.dispatch(userActions.userAccess(true));
        store.dispatch(userActions.handleUserData(userData));
        setCookie('userToken', accessToken, {
          path: '/',
          expires,
        });
        if (userData.status === 'banned') {
          navigate('/banned');
        } else {
          navigate('/');
        }
      } catch (error) {
        setShowAlertModal('이메일과 비밀번호를 다시 확인해주세요');
      }
    }
  };

  const goToSignUp = () => {
    navigate('/signup');
  };

  return (
    <SignInContainer>
      {showAlertModal && (
        <AlertModal
          title={showAlertModal}
          setShowAlertModal={setShowAlertModal}
        />
      )}
      <Character src={character} />
      <LoginInputForm
        handleUserInput={handleUserInput}
        submitSigninInfo={submitSigninInfo}
        isActive={isActive}
        goToSignUp={goToSignUp}
        handleGoogleLogin={handleGoogleLogin}
        handleKakaoLogin={handleKakaoLogin}
      />
    </SignInContainer>
  );
};

const SignInContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  background-image: url(${signInbg});
  background-size: cover;
  background-repeat: no-repeat;
`;

const Character = styled.img`
  height: 34.375rem;
`;

<<<<<<< HEAD
=======
const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 40rem;
  height: 40rem;
  padding: 3.5rem;
  border-radius: 1.25rem;
  background-color: white;
  box-shadow: 0.063rem 0.063rem 0.938rem 0.125rem rgba(0, 0, 0, 0.1);
`;

const LoginTitle = styled.div`
  font-size: 3rem;
  font-weight: 700;
`;

const LoginSubTitle = styled.div`
  margin-top: 1.25rem;
  font-size: 1.2rem;
  color: ${props => props.theme.colors.darkGray};
`;

const IdPwInputContainer = styled.div`
  margin-top: 4.6rem;
`;

const SnsLoginContainer = styled.div`
  margin-top: 1.875rem;
  text-align: center;
`;

const SnsTitle = styled.div`
  margin-bottom: 2.188rem;
  color: darkgray;
`;

>>>>>>> develop
export default SignIn;
