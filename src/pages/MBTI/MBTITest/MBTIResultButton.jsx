import styled from 'styled-components/macro';

const MBTIResultButton = ({ onCheck }) => {
  return (
    <MBTIResultButtonContainer>
      <ResultButton onClick={onCheck}>결과 보러 가기</ResultButton>
    </MBTIResultButtonContainer>
  );
};
const MBTIResultButtonContainer = styled.div`
  margin: 0.625rem 0;
`;

const ResultButton = styled.button`
  margin-bottom: 0.625rem;
  width: 9.375rem;
  height: 2.5rem;
  background-color: #edeef0;
  &:hover {
    cursor: pointer;
    background-color: #c3c8f3;
  }
  border-radius: 1.875rem;
  border: none;
  font-size: 0.938rem;
  font-weight: 500;
`;
export default MBTIResultButton;
