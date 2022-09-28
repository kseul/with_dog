import styled, { css } from 'styled-components/macro';
import { Fragment, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ onClickToggleModal }) => {
  const navigate = useNavigate();
  const hadleClick = () => {
    navigate('/signin');
  };

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);
  return (
    <Fragment>
      <LoginContainer>
        <LoginText>로그인이 필요한 서비스입니다.</LoginText>
        <LoginButton onClick={hadleClick}>
          <LoginButtonText>로그인 하러가개</LoginButtonText>
        </LoginButton>
      </LoginContainer>
      <BackGround onClick={onClickToggleModal} />
    </Fragment>
  );
};

const BasicText = css`
  color: #333333;
  font-weight: 400;
`;

const LoginContainer = styled.div`
  ${props => props.theme.flex.flexBox('column')}
  position: fixed;
  top: 50%;
  left: 35%;
  width: 35rem;
  height: 15rem;
  transform: translateY(-49%);
  background-color: white;
  box-shadow: 0.063rem 0.063rem 0.938rem 0.125rem rgba(0, 0, 0, 0.1);
  border-radius: 1.2rem;
  z-index: 2;
`;

const LoginText = styled.span`
  font-size: 1.8rem;
  ${BasicText}
`;

const LoginButton = styled.button`
  width: 9.5rem;
  height: 3rem;
  margin-top: 3rem;
  background-color: #edeef0;
  &:hover {
    cursor: pointer;
    background-color: #8fefe6;
  }
  border: none;
  border-radius: 1.875rem;
  font-size: 0.938rem;
  font-weight: 500;
`;

const LoginButtonText = styled.span`
  font-size: 1rem;
  ${BasicText}
`;

const BackGround = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 240rem;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;
export default LoginModal;
