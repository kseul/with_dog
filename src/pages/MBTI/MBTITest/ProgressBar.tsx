import styled from 'styled-components/macro';

const ProgressBar = ({ abc }: { abc: number }) => {
  return (
    <ProgressBarContainer>
      <ProgressWrapper>
        <ProgressPosition abc={abc} />
      </ProgressWrapper>
    </ProgressBarContainer>
  );
};

const ProgressBarContainer = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'center')}
  margin: 20px 0;
  width: 1200px;
  height: 50px;
  background-color: white;
  border-radius: 50px;
`;

const ProgressWrapper = styled.div`
  width: 1180px;
  height: 30px;
  border-radius: 30px;
`;

const ProgressPosition = styled.div<{ abc: number }>`
  margin-right: auto;
  width: ${({ abc }) => abc * 5}%;
  height: 30px;
  background-image: linear-gradient(to right, #8fefe6, #c3c8f3);
  border-radius: 30px;
  transition: width 0.5s ease-in-out;
`;

export default ProgressBar;
