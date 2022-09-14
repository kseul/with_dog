import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfirmText from './ConfirmText';
import LoginButton from '../components/loginButton/LoginButton';
import USER_LOCATION from '../DATA/USERLOCATION_DATA';
import bgimg from 'assets/images/bg1.jpg';

const Signup = () => {
  const navigate = useNavigate();

  const [userInputValue, setUserInputValue] = useState({
    name: '',
    email: '',
    password: '',
    nickname: '',
  });
  const { name, email, password, nickname } = userInputValue;
  const [checkName, setCheckName] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const [checkRePassword, setCheckRePassword] = useState(false);
  const [checkNickName, setCheckNickName] = useState(false);
  const [checkUniqueEmail, setCheckUniqueEmail] = useState(false);
  const [userLocation, setUserLocation] = useState('');

  const allValidEmail = checkEmail && checkUniqueEmail;
  const isActive =
    checkName &&
    allValidEmail &&
    checkPassword &&
    checkRePassword &&
    checkNickName === true;

  const handleUserInput = e => {
    const { name, value } = e.target;
    setUserInputValue({ ...userInputValue, [name]: value });

    switch (name) {
      case 'name':
        value ? setCheckName(true) : setCheckName(false);
        break;

      case 'email':
        const emailCondition = /^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/;
        const validEmail = emailCondition.test(value);
        validEmail ? setCheckEmail(true) : setCheckEmail(false);
        if (value.length > 0) {
          setCheckUniqueEmail(false);
        }
        break;

      case 'password':
        const passwordCondition =
          /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
        const validPassword = passwordCondition.test(value);
        validPassword ? setCheckPassword(true) : setCheckPassword(false);
        break;

      case 'confirmPassword':
        value === password
          ? setCheckRePassword(true)
          : setCheckRePassword(false);
        break;

      case 'nickname':
        value ? setCheckNickName(true) : setCheckNickName(false);
        break;

      default:
        break;
    }
  };

  const handleUserLocation = e => {
    setUserLocation(e.target.value);
  };

  const handleUniqueEmail = () => {
    fetch('https://togedog-dj.herokuapp.com/users/signup/emailcheck/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'success') {
          setCheckUniqueEmail(true);
        } else {
          alert('중복된 이메일 입니다.');
          setCheckUniqueEmail(false);
        }
      });
  };

  const submitSignupInfo = () => {
    if (isActive) {
      fetch('https://togedog-dj.herokuapp.com/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name,
          nickname: nickname,
          email: email,
          password: password,
          address: userLocation,
        }),
      })
        .then(res => res.json())
        .then(result => {
          if (result.message === 'success') {
            alert('회원가입이 완료되었습니다.');
            navigate('/signin');
          }
        });
    }
  };

  const USER_INPUT_FORM = [
    {
      id: 1,
      name: 'name',
      placeholder: '이름 *',
      type: 'text',
      errorMessage: '이름을 입력하세요.',
      validCheck: checkName,
    },
    {
      id: 2,
      name: 'email',
      placeholder: '이메일 *',
      type: 'text',
      errorMessage: '이메일 형식을 확인해주세요.',
      validCheck: checkEmail,
    },
    {
      id: 3,
      name: 'password',
      placeholder: '비밀번호 *',
      type: 'password',
      errorMessage: '숫자와 특수기호를 포함시켜주세요.',
      validCheck: checkPassword,
    },
    {
      id: 4,
      name: 'confirmPassword',
      placeholder: '비밀번호 확인 *',
      type: 'password',
      errorMessage: '비밀번호를 다시 한번 확인해주세요.',
      validCheck: checkRePassword,
    },
    {
      id: 5,
      name: 'nickname',
      placeholder: '닉네임 *',
      type: 'text',
      errorMessage: '닉네임을 입력하세요.',
      validCheck: checkNickName,
    },
  ];

  return (
    <SignupContainer>
      <SignupForm>
        <Title>회원가입</Title>
        <UserDataInputContainer>
          {USER_INPUT_FORM.map(
            ({ id, placeholder, type, name, errorMessage, validCheck }) => {
              return (
                <UserDataInputWrapper key={id}>
                  <UserDataInput
                    placeholder={placeholder}
                    type={type}
                    name={name}
                    onChange={handleUserInput}
                  />
                  {!validCheck && <ConfirmText errorMessage={errorMessage} />}
                </UserDataInputWrapper>
              );
            }
          )}
          <UniqueEmailButton onClick={handleUniqueEmail}>
            {checkUniqueEmail ? (
              <PassText>확인 완료</PassText>
            ) : (
              <RequestText>중복 확인</RequestText>
            )}
          </UniqueEmailButton>
          <UserLocationContainer>
            <ChooseText>지역을 선택해주세요 👉 </ChooseText>
            <UserLocation onChange={handleUserLocation}>
              {USER_LOCATION.map(({ id, location }) => {
                return (
                  <Location key={id} value={location} defaultValue="서울특별시">
                    {location}
                  </Location>
                );
              })}
            </UserLocation>
          </UserLocationContainer>
        </UserDataInputContainer>
        <ButtonWrapper>
          <LoginButton
            title="회원가입"
            color="#7CCCC7"
            size={18}
            isActive={isActive}
            func={submitSignupInfo}
          />
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
  position: relative;
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

const UniqueEmailButton = styled.button`
  position: absolute;
  top: 19%;
  right: 0;
  width: 3.75rem;
  height: 1.25rem;
  border: 1px solid gray;
  border-radius: 1.875rem;
  background-color: white;
  font-size: 0.7rem;
  font-weight: 600;
`;

const PassText = styled.div`
  color: green;
`;

const RequestText = styled.div`
  color: red;
  opacity: 0.6;
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
