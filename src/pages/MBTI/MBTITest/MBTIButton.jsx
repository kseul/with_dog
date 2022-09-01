import styled from 'styled-components/macro';

const MBTIButton = ({ onCheck }) => {
  return (
    <MBTIButtonContainer>
      <NextButton onClick={onCheck}>넘어가기</NextButton>
    </MBTIButtonContainer>
  );
};
const MBTIButtonContainer = styled.div`
  margin: 10px 0;
`;

const NextButton = styled.button`
  margin-bottom: 10px;
  width: 150px;
  height: 40px;
  background-color: #edeef0;
  &:hover {
    cursor: pointer;
    background-color: #8fefe6;
  }
  border-radius: 30px;
  border: none;
  font-size: 15px;
  font-weight: 500;
`;
export default MBTIButton;
