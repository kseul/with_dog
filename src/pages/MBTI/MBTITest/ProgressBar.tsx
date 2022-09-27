import styled from 'styled-components/macro';

const ProgressBar = ({ percentLength }: { percentLength: number }) => {
  return (
    <ProgressBarContainer>
      <ProgressBarWrapper>
        <ProgressBox>
          <ProgressPosition percentLength={percentLength} />
        </ProgressBox>
      </ProgressBarWrapper>
    </ProgressBarContainer>
  );
};
const ProgressBarContainer = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'center')}
  position: fixed;
  top: 77px;
  width: 100%;
  height: 75px;
  background-color: #edeef0;
`;

const ProgressBarWrapper = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'center')}
  width: 75rem;
  height: 3.125rem;
  margin: 1rem 0 1.25rem 0;
  background-color: white;
  border-radius: 3.125rem;
`;

const ProgressBox = styled.div`
  width: 73.75rem;
  height: 1.875rem;
  border-radius: 1.875rem;
`;

const ProgressPosition = styled.div<{ percentLength: number }>`
  width: ${({ percentLength }) => percentLength * 5}%;
  height: 1.875rem;
  margin-right: auto;
  background-image: linear-gradient(to right, #8fefe6, #c3c8f3);
  border-radius: 1.875rem;
  transition: width 0.5s ease-in-out;
`;

export default ProgressBar;
