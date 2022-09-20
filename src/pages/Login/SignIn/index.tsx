import axios from 'axios';
import styled from 'styled-components';
import { useCookies } from 'react-cookie';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AlertModal from 'pages/components/AlertModal';
import InputForm from '../components/inputForm/InputForm';
import LoginButton from '../components/loginButton/LoginButton';
import SNSButton from '../components/snsButton/SNSButton';
import store from 'redux/store';
import userActions from 'redux/actions/user';
import { KAKAO_AUTH_PATH } from './kakaoLogin/KakaoLoginData';
import { GOOGLE_AUTH_PATH } from './googleLogin/GoogleloginData';
import signInbg from 'assets/images/bg1.jpg';
import googleIcon from 'assets/svg/google-logo.svg';
import kakaoIcon from 'assets/svg/kakao-logo.svg';
import character from 'assets/images/LoginBgCharacter.png';

const SignIn = () => {
  // const [, setCookie] = useCookies(['userToken']);
  const [showAlertModal, setShowAlertModal] = useState('');

  const navigate = useNavigate();

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

  const isActive =
    email.includes('@') && email.includes('.') && password.length > 7 === true;

  const submitSigninInfo = () => {
    if (isActive) {
      axios
        .post(
          'https://togedog-dj.herokuapp.com/users/login/email',
          {
            email: email,
            password: password,
          },
          { withCredentials: true }
        )
        .then(res => {
          const userData = res.data.user;
          if (res.status === 200) {
            store.dispatch(userActions.userAccess(true));
            store.dispatch(userActions.handleUserData(userData));
            navigate('/');
          }
        })
        .catch(error => {
          if (error) {
            setShowAlertModal('이메일과 비밀번호를 다시 확인해주세요.');
          }
        });

      // fetch('https://togedog-dj.herokuapp.com/users/login/email', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     email: email,
      //     password: password,
      //   }),
      // })
      //   .then(res => {
      //     if (res.status === 200) {
      //       navigate('/');
      //       return res.json();
      //     } else {
      //       alert('이메일과 비밀번호를 다시 확인하세요.');
      //     }
      //   })
      //   .then(data => {
      //     const userData = data.user;
      //     store.dispatch(userActions.userAccess(true));
      //     store.dispatch(userActions.handleUserData(userData));
      //     setCookie('userToken', data.access_token, {
      //       path: '/',
      //       // secure: true,
      //       // httpOnly: true,
      //     });
      //   });
    }
  };

  const goToSignUp = () => {
    navigate('/signup');
  };

  return (
    <SignInContainer>
      <AlertModal
        title={showAlertModal}
        setShowAlertModal={setShowAlertModal}
        showAlertModal={showAlertModal}
      />
      <Character src={character} />
      <LoginForm>
        <LoginTitle>로그인</LoginTitle>
        <LoginSubTitle>함께하러 가시개!</LoginSubTitle>
        <IdPwInputContainer>
          <InputForm
            placeholder="이메일 입력"
            type="text"
            name="email"
            handleUserInput={handleUserInput}
            submitSigninInfo={submitSigninInfo}
          />
          <InputForm
            placeholder="비밀번호 입력"
            type="password"
            name="password"
            handleUserInput={handleUserInput}
            submitSigninInfo={submitSigninInfo}
          />
        </IdPwInputContainer>
        <LoginButton
          title="로그인"
          color="#7CCCC7"
          size={21}
          isActive={isActive}
          func={submitSigninInfo}
        />
        <LoginButton
          title="회원가입"
          color="#CFB6D7"
          size={21}
          isActive={true}
          func={goToSignUp}
        />
        <SnsLoginContainer>
          <SnsTitle>⏤ SNS 로그인 ⏤</SnsTitle>
          <SNSButton
            title="구글"
            icon={googleIcon}
            handleSNSLogin={handleGoogleLogin}
          />
          <SNSButton
            title="카카오"
            icon={kakaoIcon}
            handleSNSLogin={handleKakaoLogin}
          />
        </SnsLoginContainer>
      </LoginForm>
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

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 40rem;
  height: 40rem;
  padding: 3.5rem;
  border-radius: 1.25rem;
  background-color: white;
  box-shadow: 1px 1px 15px 2px rgba(0, 0, 0, 0.1);
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

export default SignIn;
