import styled from 'styled-components';
import { useEffect } from 'react';
import { AlertModalProps } from 'types/type';
import cancelImg from 'assets/svg/cancel.svg';

const AlertModal = ({ title, setShowAlertModal }: AlertModalProps) => {
  const handleModal = () => {
    setShowAlertModal('');
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
    <>
      <AlertModalContainer>
        <Title>{title}</Title>
        <CancelImg src={cancelImg} onClick={handleModal} />
      </AlertModalContainer>
      <BackGround onClick={handleModal} />
    </>
  );
};

const AlertModalContainer = styled.div`
  ${props => props.theme.flex.flexBox('column')}
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 31.25rem;
  height: 9.375rem;
  background-color: white;
  box-shadow: 1px 1px 15px 2px rgba(0, 0, 0, 0.1);
  border-radius: 1.25rem;
  z-index: 2;
`;

const Title = styled.div`
  position: relative;
  font-size: 1.5rem;
  font-weight: 500;
  color: ${props => props.theme.colors.gray};
`;

const CancelImg = styled.img`
  position: absolute;
  top: 5.5%;
  right: 2%;
  width: 1.875rem;
  cursor: pointer;
`;

const BackGround = styled.div`
  position: absolute;
  width: 100vw;
  height: 126vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export default AlertModal;
