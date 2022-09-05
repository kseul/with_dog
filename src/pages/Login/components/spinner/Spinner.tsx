import styled from 'styled-components';
import SpinnerImg from 'assets/images/Spinner.gif';

const Spinner = () => {
  return (
    <SpinnerContainer>
      <LoadingText>잠시만 기다리시개</LoadingText>
      <LoadingImage src={SpinnerImg} />
    </SpinnerContainer>
  );
};

const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoadingText = styled.header`
  margin-bottom: 2.5rem;
  font-size: 2.1rem;
  font-weight: 700;
  color: ${props => props.theme.colors.mint};
`;

const LoadingImage = styled.img``;

export default Spinner;
