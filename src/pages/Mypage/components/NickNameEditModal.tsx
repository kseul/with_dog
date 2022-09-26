import styled from 'styled-components';
import { useEffect } from 'react';
import EditModalButton from './EditModalButton';

const NickNameEditModal = ({
  setShowEditModal,
  submitChangedNickname,
  validkNickname,
  setValidNickname,
  setChangedNickname,
}) => {
  const handleUserInput = e => {
    const { value } = e.target;

    if (value.length > 0 && value.length <= 10) {
      setValidNickname(true);
      setChangedNickname(value);
    } else {
      setValidNickname(false);
    }
  };

  const closeModal = () => {
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
          placeholder="닉네임은 10글자 내로 작성해주세요."
          type="text"
          onChange={handleUserInput}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              e.preventDefault();
              submitChangedNickname();
            }
          }}
        />
        <ButtonContainer>
          <EditModalButton
            title="취소"
            backgroundColor="#CFB6D7"
            func={closeModal}
            isActive={true}
          />
          <EditModalButton
            title="확인"
            backgroundColor="#7CCCC7"
            func={submitChangedNickname}
            isActive={validkNickname}
          />
        </ButtonContainer>
      </TextEditModalContainer>
      <BackGround onClick={closeModal} />
    </>
  );
};

const TextEditModalContainer = styled.form`
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
  width: 20rem;
  height: 2.813rem;
  margin-top: 2rem;
  padding-left: 0;
  padding-top: 0.9rem;
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

const BackGround = styled.div`
  position: absolute;
  width: 100vw;
  height: 126vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export default NickNameEditModal;
