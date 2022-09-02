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
  margin: 1.25rem 0;
  width: 75rem;
  height: 3.125rem;
  background-color: white;
  border-radius: 3.125rem;
`;

const ProgressWrapper = styled.div`
  width: 73.75rem;
  height: 1.875rem;
  border-radius: 1.875rem;
`;

const ProgressPosition = styled.div<{ abc: number }>`
  margin-right: auto;
  width: ${({ abc }) => abc * 5}%;
  height: 1.875rem;
  background-image: linear-gradient(to right, #8fefe6, #c3c8f3);
  border-radius: 1.875rem;
  transition: width 0.5s ease-in-out;
`;

export default ProgressBar;
