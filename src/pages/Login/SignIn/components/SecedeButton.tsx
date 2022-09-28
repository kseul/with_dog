import styled from 'styled-components';

const SecedeButton = ({ closeModal, submitSecede }) => {
  return (
    <>
      <Container>
        <Title>회원탈퇴를 진행하시겠습니까?</Title>
        <ButtonContainer>
          <Button onClick={closeModal} agree={false}>
            아니오
          </Button>
          <Button onClick={submitSecede} agree={true}>
            예
          </Button>
        </ButtonContainer>
      </Container>
      <BackGround onClick={closeModal} />
    </>
  );
};

const Container = styled.div`
  ${props => props.theme.flex.flexBox('column')}
  position: absolute;
  width: 31.25rem;
  height: 9.375rem;
  background-color: white;
  border-radius: 1.25rem;
  z-index: 2;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${props => props.theme.colors.gray};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding-top: 1.8rem;
`;

const Button = styled.button<{
  agree: boolean;
}>`
  width: 9.375rem;
  height: 1.875rem;
  border-radius: 0.875rem;
  border: none;
  background-color: ${props => (props.agree ? '#7CCCC7' : '#CFB6D7')};
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

export default SecedeButton;
