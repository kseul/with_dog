import styled from 'styled-components/macro';

const MBTIResultButton = ({ onCheck }) => {
  return (
    <MBTIResultButtonContainer>
      <ResultButton onClick={onCheck}>결과 보러 가기</ResultButton>
    </MBTIResultButtonContainer>
  );
};
const MBTIResultButtonContainer = styled.div`
  margin: 10px 0;
`;

const ResultButton = styled.button`
  margin-bottom: 10px;
  width: 150px;
  height: 40px;
  background-color: #edeef0;
  &:hover {
    cursor: pointer;
    background-color: #c3c8f3;
  }
  border-radius: 30px;
  border: none;
  font-size: 15px;
  font-weight: 500;
`;
export default MBTIResultButton;
