import styled from 'styled-components';
import bgimg from 'assets/images/bg1.jpg';
import USER_LOCATION from '../DATA/USERLOCATION_DATA';
import LoginButton from '../components/loginButton/LoginButton';
import { useState } from 'react';
import ConfirmText from './ConfirmText';

const Signup = () => {
  const [userInputValue, setUserInputValue] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    nickname: '',
  });

  const [checkName, setCheckName] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const [RecheckPassword, setReCheckPassword] = useState(false);
  const [checkNickName, setCheckNickName] = useState(false);

  const { name, email, password, confirmPassword, nickname } = userInputValue;

  const handleUserInput = e => {
    const { name, value } = e.target;
    setUserInputValue({ ...userInputValue, [name]: value });

    if (name === 'name') {
      const currentName = value;
      if (currentName) {
        setCheckName(true);
      } else {
        setCheckName(false);
      }
    }
    if (name === 'email') {
      const currentEmail = value;
      if (currentEmail.includes('@') && currentEmail.includes('.')) {
        setCheckEmail(true);
      } else {
        setCheckEmail(false);
      }
    }
    if (name === 'password') {
      const currentPassword = value;
      const passwordCondition =
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
      const validPassword = passwordCondition.test(currentPassword);
      if (validPassword) {
        setCheckPassword(true);
      } else {
        setCheckPassword(false);
      }
    }
    if (name === 'confirmPassword') {
      const currentConfirmPassword = value;
      if (currentConfirmPassword === password) {
        setReCheckPassword(true);
      } else {
        setReCheckPassword(false);
      }
    }
    if (name === 'nickname') {
      const currentNickName = value;
      if (currentNickName) {
        setCheckNickName(true);
      } else {
        setCheckNickName(false);
      }
    }
  };

  return (
    <SignupContainer>
      <SignupForm>
        <Title>회원가입</Title>
        <UserDataInputContainer>
          {USER_INPUT_FORM.map(({ id, placeholder, type, name }) => {
            return (
              <UserDataInputWrapper key={id}>
                {/* {checkName ? '이름 올바름' : '이름 고치셈'}
                <br />
                {checkEmail ? '이메일 올바름' : '이메일 고치셈'}
                <br />
                {checkPassword ? '비밀번호 올바름' : '비밀번호 고치셈'}
                <br />
                {RecheckPassword
                  ? '비밀번호 확인 올바름'
                  : '비밀번호 확인 고치셈'}
                <br />
                {checkNickName ? '닉네임 올바름' : '닉네임 고치셈'}
                <br /> */}
                <UserDataInput
                  placeholder={placeholder}
                  type={type}
                  name={name}
                  onChange={handleUserInput}
                />
                <ConfirmText />
              </UserDataInputWrapper>
            );
          })}
          <UserLocationContainer>
            <ChooseText>지역을 선택해주세요 👉 </ChooseText>
            <UserLocation name="사용자 지역">
              {USER_LOCATION.map(({ id, location }) => {
                return (
                  <Location key={id} value={location}>
                    {location}
                  </Location>
                );
              })}
            </UserLocation>
          </UserLocationContainer>
        </UserDataInputContainer>
        <ButtonWrapper>
          <LoginButton title="회원가입" color="#AEB5BC" size={18} />
        </ButtonWrapper>
      </SignupForm>
    </SignupContainer>
  );
};
const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${bgimg});
  background-size: cover;
`;
const SignupForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 3.125rem;
  background-color: white;
  border-radius: 1.25rem;
  box-shadow: 1px 1px 15px 2px rgba(0, 0, 0, 0.1);
`;
const Title = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 3.3rem;
  font-size: 1.5rem;
  font-weight: 600;
`;
const UserDataInputContainer = styled.div`
  margin-bottom: 2.5rem;
`;
const UserDataInputWrapper = styled.div``;
const UserDataInput = styled.input`
  width: 18rem;
  padding-left: 0;
  padding-bottom: 0.3rem;
  margin-bottom: 2.7rem;
  border: none;
  border-bottom: 1px solid lightgray;
  font-size: 0.9rem;
`;
const UserLocationContainer = styled.div`
  display: flex;
  position: relative;
`;
const ChooseText = styled.div`
  flex: 7;
  font-size: 14.5px;
  font-weight: 600;
`;
const UserLocation = styled.select`
  position: absolute;
  top: -25%;
  right: 0%;
  width: 6.25rem;
  border-radius: 0.3rem;
  border-color: darkgray;
`;
const Location = styled.option``;
const ButtonWrapper = styled.div`
  margin-bottom: 1.25rem;
`;

export default Signup;

const USER_INPUT_FORM = [
  {
    id: 1,
    name: 'name',
    placeholder: '이름 *',
    type: 'text',
  },
  {
    id: 2,
    name: 'email',
    placeholder: '이메일 *',
    type: 'text',
  },
  {
    id: 3,
    name: 'password',
    placeholder: '비밀번호 *',
    type: 'password',
  },
  {
    id: 4,
    name: 'confirmPassword',
    placeholder: '비밀번호 확인 *',
    type: 'password',
  },
  {
    id: 5,
    name: 'nickname',
    placeholder: '닉네임 *',
    type: 'text',
  },
];
