import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import signInbg from 'assets/images/bg1.jpg';
import AdminLoginButton from 'pages/Admin/components/AdminLogin/AdminLoginButton';
import character from 'assets/images/LoginBgCharacter.png';

const AdminSignIn = () => {
  const navigate = useNavigate();
  const [adminId, setAdminId] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  const submitSigninInfo = e => {
    axios
      .post('https://togedog-dj.herokuapp.com/users/login/email', {
        email: adminId,
        password: adminPassword,
      })
      .then(res => {
        if (res.status === 200 && res.data.user.user_type === 'admin') {
          navigate('/admin/users');
          sessionStorage.setItem('token', res.data.access_token);
        }
      })
      .catch(error => {
        if (error.response.status === 404) {
          alert('접근이 불가능합니다.');
        } else if (error.response.status === 422) {
          alert('아이디와 비밀번호를 다시 입력하여 주세요.');
        }
      });
  };

  return (
    <SignInContainer>
      <Character src={character} />
      <LoginForm>
        <LoginTitle>관리자 로그인</LoginTitle>
        <LoginSubTitle>관리하러 가시개!</LoginSubTitle>
        <IdPwInputContainer>
          <AdminIdInput
            placeholder="아이디 입력"
            type="text"
            onChange={e => setAdminId(e.target.value)}
          />
          <AdminPasswordInput
            placeholder="비밀번호 입력"
            type="password"
            onChange={e => setAdminPassword(e.target.value)}
          />
        </IdPwInputContainer>
        <AdminLoginButton
          title="로그인"
          color="#728180"
          size={21}
          submitSigninInfo={submitSigninInfo}
        />
      </LoginForm>
    </SignInContainer>
  );
};
const SignInContainer = styled.div`
  ${props => props.theme.flex.flexBox('flex', 'center', 'space-around')}
  width : 100%;
  min-width: 50rem;
  height: 100vh;
  background-image: url(${signInbg});
  background-size: cover;
  background-repeat: no-repeat;
`;
const Character = styled.img`
  height: 34.375rem;
`;
const LoginForm = styled.div`
  ${props => props.theme.flex.flexBox('column', 'center', 'center')}
  max-width: 40rem;
  height: 40rem;
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

const AdminIdInput = styled.input`
  width: 22rem;
  height: 1.875rem;
  margin-bottom: 2.5rem;
  padding-left: 0;
  border: none;
  border-bottom: 1px solid darkgray;
  font-size: 1.063rem;
`;

const AdminPasswordInput = styled.input`
  width: 22rem;
  height: 1.875rem;
  margin-bottom: 2.5rem;
  padding-left: 0;
  border: none;
  border-bottom: 1px solid darkgray;
  font-size: 1.063rem;
`;
export default AdminSignIn;
