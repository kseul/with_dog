import styled from 'styled-components';
import signInbg from 'assets/images/signin-bg.jpg';
import googleIcon from 'assets/svg/google-logo.svg';
import kakaoIcon from 'assets/svg/kakao-logo.svg';
import InputForm from '../components/inputForm/InputForm';
import LoginButton from '../components/loginButton/LoginButton';
import SNSButton from '../components/SNSButton/SNSButton';

const SignIn = () => {
  return (
    <SignInContainer>
      <LoginForm>
        <LoginTitle>로그인</LoginTitle>
        <LoginSubTitle>함께하러 가시개!</LoginSubTitle>
        <IdPwInputContainer>
          <InputForm placeholder="아이디 입력" type="text" />
          <InputForm placeholder="비밀번호 입력" type="password" />
        </IdPwInputContainer>
        <LoginButton title="로그인" color="#7CCCC7" />
        <LoginButton title="회원가입" color="#CFB6D7" />
        <SnsLoginContainer>
          <SnsTitle>⏤ SNS 로그인 ⏤</SnsTitle>
          <SNSButton title="구글" icon={googleIcon} />
          <SNSButton title="카카오" icon={kakaoIcon} />
        </SnsLoginContainer>
      </LoginForm>
    </SignInContainer>
  );
};
const SignInContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100vh;
  background-image: url(${signInbg});
  background-size: cover;
  background-repeat: no-repeat;
`;
const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 40rem;
  height: 40rem;
  margin-right: 8rem;
  padding: 3.5rem;
  border-radius: 1.25rem;
  background-color: white;
  box-shadow: 1px 2px 3px 4px lightgray;
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
