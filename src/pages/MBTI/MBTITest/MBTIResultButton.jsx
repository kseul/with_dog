import styled from 'styled-components/macro';

const MBTIResultButton = ({ onCheck }) => {
  return (
    <MBTIResultButtonContainer>
      <ResultButton onClick={onCheck}>결과 보러 가기</ResultButton>
    </MBTIResultButtonContainer>
  );
};
const MBTIResultButtonContainer = styled.div`
  margin: 30px 0;
`;

const ResultButton = styled.button`
  margin-bottom: 10px;
  width: 150px;
  height: 30px;
  background-color: blue;
  border-radius: 30px;
  border: none;
`;
export default MBTIResultButton;
