import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { EditModalProps } from 'types/type';
import store from 'redux/store';
import userActions from 'redux/actions/user';

const TextEditModal = ({ setShowEditModal }: EditModalProps) => {
  const [checkNickname, setCheckNickname] = useState(false);
  const [changedNickname, setChangedNickname] = useState('');

  const isActive = checkNickname === true;

  const handleUserInput = (e: any) => {
    const { value } = e.target;
    if (value.length > 0 && value.length <= 6) {
      setCheckNickname(true);
      setChangedNickname(value);
    } else {
      setCheckNickname(false);
    }
  };

  const closeModal = () => {
    setShowEditModal(false);
  };

  const submitChangedNickname = () => {
    store.dispatch(userActions.changeNickname(changedNickname));
    setShowEditModal(false);
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
      <TextEditModalContainer>
        <Title>수정할 닉네임을 입력하세요.</Title>
        <EditNickNameInput
          placeholder="닉네임은 6글자 내로 작성해주세요."
          type="text"
          onChange={handleUserInput}
        />
        <ButtonContainer>
          <CancelButton onClick={closeModal}>취소</CancelButton>
          <ConfirmButton disabled={!isActive} onClick={submitChangedNickname}>
            확인
          </ConfirmButton>
        </ButtonContainer>
      </TextEditModalContainer>
      <BackGround onClick={closeModal} />
    </>
  );
};

const TextEditModalContainer = styled.div`
  ${props => props.theme.flex.flexBox('column')}
  position: absolute;
  width: 33rem;
  height: 13rem;
  background-color: white;
  border-radius: 1.25rem;
  z-index: 2;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
`;

const EditNickNameInput = styled.input`
  margin-top: 2rem;
  padding-left: 0;
  padding-top: 0.9rem;
  width: 20rem;
  height: 2.813rem;
  border: none;
  border-bottom: 1px solid gray;
  font-size: 1rem;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding-top: 1.8rem;
`;

const ConfirmButton = styled.button`
  display: block;
  width: 9.375rem;
  height: 1.875rem;
  border-radius: 0.875rem;
  border: none;
  background-color: ${props => props.theme.colors.mint};
  font-size: 1rem;
  color: white;
  opacity: ${props => (props.disabled ? 0.6 : 1)};
`;

const CancelButton = styled.button`
  display: block;
  width: 9.375rem;
  height: 1.875rem;
  border-radius: 0.875rem;
  border: none;
  background-color: ${props => props.theme.colors.purple};
  font-size: 1rem;
  color: white;
`;

const BackGround = styled.div`
  position: absolute;
  width: 100vw;
  height: 126vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export default TextEditModal;
