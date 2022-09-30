import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import LoginButton from '../components/loginButton/LoginButton';
import UserDataInputForm from './components/UserDataInputForm';
import AlertModal from 'pages/components/AlertModal';
import API from 'config';
import bgimg from 'assets/images/bg1.jpg';

const Signup = () => {
  const navigate = useNavigate();
  const [userInputValue, setUserInputValue] = useState({
    name: '',
    email: '',
    password: '',
    nickname: '',
  });
  const [checkName, setCheckName] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const [checkRePassword, setCheckRePassword] = useState(false);
  const [checkNickName, setCheckNickName] = useState(false);
  const [checkUniqueEmail, setCheckUniqueEmail] = useState(false);
  const [userLocation, setUserLocation] = useState('');
  const [showAlertModal, setShowAlertModal] = useState('');
  const { name, email, password, nickname } = userInputValue;

  const allValidEmail = checkEmail && checkUniqueEmail;
  const isActive = useMemo(() => {
    return (
      checkName &&
      allValidEmail &&
      checkPassword &&
      checkRePassword &&
      checkNickName === true
    );
  }, [checkName, allValidEmail, checkPassword, checkRePassword, checkNickName]);

  const handleUserInput = e => {
    const { name, value } = e.target;
    setUserInputValue({ ...userInputValue, [name]: value });

    switch (name) {
      case 'name':
        value.length > 0 && value.length <= 10
          ? setCheckName(true)
          : setCheckName(false);
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
        value.length > 0 && value.length <= 10
          ? setCheckNickName(true)
          : setCheckNickName(false);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    if (checkEmail) {
      const handleUniqueEmail = async () => {
        try {
          await axios.post(`${API.EMAILCHECK}`, {
            headers: { 'Content-Type': 'application/json' },
            email,
          });
          setCheckUniqueEmail(true);
        } catch (error) {
          setShowAlertModal('중복된 이메일입니다.');
          setCheckEmail(false);
        }
      };

      const timer = setTimeout(() => {
        handleUniqueEmail();
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [email, checkEmail]);

  const handleUserLocation = e => {
    setUserLocation(e.target.value);
  };

  const submitSignupInfo = async () => {
    if (isActive) {
      try {
        await axios.post(`${API.SIGNUP}`, {
          headers: { 'Content-Type': 'application/json' },
          name: name,
          nickname: nickname,
          email: email,
          password: password,
          address: userLocation,
        });
        setShowAlertModal('회원가입이 완료되었습니다.');
        setTimeout(() => {
          navigate('/signin');
        }, 1000);
      } catch (error: any) {
        if (error.response.status === 400) {
          setShowAlertModal('부적절한 닉네임입니다.');
        }
      }
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
      errorMessage: '숫자와 특수문자 포함 8~16자 내로 작성해주세요.',
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
      errorMessage: '닉네임은 10글자 내로 작성해주세요.',
      validCheck: checkNickName,
    },
  ];

  return (
    <SignupContainer>
      {showAlertModal && (
        <AlertModal
          title={showAlertModal}
          setShowAlertModal={setShowAlertModal}
        />
      )}
      <SignupForm>
        <Title>회원가입</Title>
        <UserDataInputForm
          USER_INPUT_FORM={USER_INPUT_FORM}
          handleUserInput={handleUserInput}
          checkUniqueEmail={checkUniqueEmail}
          handleUserLocation={handleUserLocation}
        />
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
  box-shadow: 0.063rem 0.063rem 0.938rem 0.125rem rgba(0, 0, 0, 0.1);
`;

const Title = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 3.3rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 1.25rem;
`;

export default Signup;
