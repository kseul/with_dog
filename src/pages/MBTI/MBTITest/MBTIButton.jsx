import styled from 'styled-components/macro';

const MBTIButton = ({ onCheck }) => {
  return (
    <MBTIButtonContainer>
      <NextButton onClick={onCheck}>넘어가기</NextButton>
    </MBTIButtonContainer>
  );
};
const MBTIButtonContainer = styled.div`
  margin: 30px 0;
`;

const NextButton = styled.button`
  margin-bottom: 10px;
  width: 150px;
  height: 30px;
  background-color: red;
  border-radius: 30px;
  border: none;
`;
export default MBTIButton;
