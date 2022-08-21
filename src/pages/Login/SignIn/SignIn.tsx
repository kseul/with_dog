import styled from 'styled-components';
import signInbg from 'assets/images/signin-bg.jpg';
import googleIcon from 'assets/svg/google-logo.svg';
import kakaoIcon from 'assets/svg/kakao-logo.svg';

const SignIn = () => {
  return (
    <SignInContainer>
      <BackGroundImg src={signInbg} />
      <LoginForm>
        <LoginTitleContainer>
          <LoginTitle>로그인</LoginTitle>
          <LoginSubTitle>함께하러 가시개!</LoginSubTitle>
        </LoginTitleContainer>
        <IdPwInputContainer>
          <IdInputForm placeholder="아이디 입력" type="text" />
          <PassWordInputForm placeholder="비밀번호 입력" type="password" />
        </IdPwInputContainer>
        <LoginButtonContainer>
          <SignInButton>로그인</SignInButton>
          <SignUpButton>회원가입</SignUpButton>
        </LoginButtonContainer>
        <SnsLoginContainer>
          <SnsTitle>⏤ SNS 로그인 ⏤</SnsTitle>
          <GoogleButton>
            <GoogleIcon src={googleIcon} />
            <GoogleLogin> 구글 로그인</GoogleLogin>
          </GoogleButton>
          <KaKaoButton>
            <KakaoIcon src={kakaoIcon} />
            <KakaoLogin> 카카오 로그인</KakaoLogin>
          </KaKaoButton>
        </SnsLoginContainer>
      </LoginForm>
    </SignInContainer>
  );
};
const SignInContainer = styled.div`
  position: relative;
  height: 100vh;
  text-align: center;
`;
const BackGroundImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const LoginForm = styled.div`
  position: absolute;
  top: 10%;
  right: 10%;
  padding: 60px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 1px 2px 3px 4px lightgray;
`;
const LoginTitleContainer = styled.div``;
const LoginTitle = styled.div`
  font-size: 50px;
  font-weight: 700;
`;
const LoginSubTitle = styled.div`
  margin-top: 20px;
  font-size: 20px;
  color: ${props => props.theme.colors.darkGray};
`;
const IdPwInputContainer = styled.div`
  margin-top: 80px;
`;
const IdInputForm = styled.input`
  height: 40px;
  width: 350px;
  margin-bottom: 40px;
  padding-left: 0;
  border: none;
  border-bottom: 1px solid darkgray;
  font-size: 17px;
`;
const PassWordInputForm = styled.input`
  height: 40px;
  width: 350px;
  padding-left: 0;
  border: none;
  border-bottom: 1px solid darkgray;
  font-size: 17px;
`;
const LoginButtonContainer = styled.div`
  margin-top: 50px;
`;
const SignInButton = styled.button`
  display: block;
  width: 350px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  padding: 10px 0;
  border: none;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.mint};
  color: white;
  font-size: 20px;
`;
const SignUpButton = styled.button`
  display: block;
  width: 350px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  padding: 10px 0;
  border: none;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.purple};
  color: white;
  font-size: 20px;
`;
const SnsLoginContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 30px;
`;
const SnsTitle = styled.div`
  margin-bottom: 25px;
  color: darkgray;
`;
const GoogleButton = styled.button`
  position: relative;
  width: 160px;
  padding: 7px 0;
  background-color: white;
  border-radius: 10px;
  border: 1px solid lightgray;
`;
const GoogleIcon = styled.img`
  position: absolute;
  top: 10%;
  left: 6%;
  height: 23px;
`;
const GoogleLogin = styled.span`
  padding-left: 10px;
  font-size: 17px;
`;
const KaKaoButton = styled.button`
  position: relative;
  width: 160px;
  padding: 7px 0;
  margin-left: 30px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid lightgray;
`;
const KakaoIcon = styled.img`
  position: absolute;
  top: 10%;
  left: 6%;
  height: 23px;
`;
const KakaoLogin = styled.span`
  padding-left: 15px;
  font-size: 17px;
`;
export default SignIn;
