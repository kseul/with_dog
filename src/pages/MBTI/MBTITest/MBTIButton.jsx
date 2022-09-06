import styled from 'styled-components/macro';

const MBTIButton = ({ onCheck }) => {
  return (
    <MBTIButtonContainer>
      <NextButton onClick={onCheck}>넘어가기</NextButton>
    </MBTIButtonContainer>
  );
};
const MBTIButtonContainer = styled.div`
  margin: 0.625rem 0;
`;

const NextButton = styled.button`
  width: 9.375rem;
  height: 2.5rem;
  margin-bottom: 0.625rem;
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
export default MBTIButton;
