import styled from 'styled-components';

const ConfirmText = () => {
  return (
    <ConfirmTextContainer>
      <Title>이름을 작성해주세요.</Title>
    </ConfirmTextContainer>
  );
};

const ConfirmTextContainer = styled.div`
  position: relative;
`;
const Title = styled.div`
  position: absolute;
  top: -40px;
  left: 0%;
  font-size: 13px;
  color: red;
  opacity: 0.6;
`;
export default ConfirmText;
