import styled from 'styled-components';
import { CheckValidProps } from 'types/type';

const ConfirmText = ({ errorMessage }: CheckValidProps) => {
  return (
    <ConfirmTextContainer>
      <Title>{errorMessage}</Title>
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
