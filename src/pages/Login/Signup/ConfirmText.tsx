import styled from 'styled-components';

interface ConfirmTextProps {
  errorMessage: string;
}

const ConfirmText = ({ errorMessage }: ConfirmTextProps) => {
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
