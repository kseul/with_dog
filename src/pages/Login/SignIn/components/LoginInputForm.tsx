import styled from 'styled-components';
import InputForm from 'pages/Login/components/inputForm/InputForm';
import LoginButton from 'pages/Login/components/loginButton/LoginButton';
import SNSButton from 'pages/Login/components/snsButton/SNSButton';
import googleIcon from 'assets/svg/google-logo.svg';
import kakaoIcon from 'assets/svg/kakao-logo.svg';

const LoginInputForm = ({
  handleUserInput,
  submitSigninInfo,
  isActive,
  goToSignUp,
  handleGoogleLogin,
  handleKakaoLogin,
}) => {
  return (
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
  );
};

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

export default LoginInputForm;
