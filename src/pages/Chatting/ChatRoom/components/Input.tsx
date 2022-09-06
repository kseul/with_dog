import styled from 'styled-components';

const Input = () => {
  return (
    <InputContainer>
      <InputBox>
        <ChatInput type="text" placeholder="메세지 입력" />
        <InputBtn>전송</InputBtn>
      </InputBox>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  width: 65%;
  height: 5.5rem;
  background-color: #efefef;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.1);
`;

const InputBox = styled.form`
  ${props => props.theme.flex.flexBox()}
  justify-content: space-around;
  margin: 1rem 2rem;
  height: 3.5rem;
  border-radius: 0.8rem;
  background-color: white;
`;

const ChatInput = styled.input`
  width: 80%;
  font-size: 1.2rem;
  border: none;

  &::placeholder {
    color: ${props => props.theme.colors.lineLightGray};
  }
`;

const InputBtn = styled.button`
  padding-right: 0.8rem;
  font-size: 1.3rem;
  border: none;
  color: ${props => props.theme.colors.mint};
  background: none;

  &:hover {
    color: ${props => props.theme.colors.selectMint};
  }

  &::before {
    content: '';
    border: 1px solid ${props => props.theme.colors.lineLightGray};
    margin-right: 1.3rem;
  }
`;

export default Input;
