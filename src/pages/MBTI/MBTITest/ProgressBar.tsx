import styled from 'styled-components/macro';
import { useEffect, useState } from 'react';

interface Container {
  filled: number;
}

const ProgressBar = () => {
  const [percent, setPercent] = useState<number>(0);
  return (
    <ProgressBarContainer>
      <ProgressWrapper>
        <ProgressPosition percent={percent} />
      </ProgressWrapper>
    </ProgressBarContainer>
  );
};

const ProgressBarContainer = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'center')}
  margin-top: 40px;
  width: 1200px;
  height: 50px;
  background-color: red;
  border-radius: 50px;
`;

const ProgressWrapper = styled.div`
  width: 1180px;
  height: 30px;
  border-radius: 30px;
`;

const ProgressPosition = styled.div<{ percent: number }>`
  margin-right: auto;
  width: ${({ percent }) => percent}%;
  height: 30px;
  background-color: blue;
  border-radius: 30px;
  transition: width 0.5s ease-in-out;
`;

export default ProgressBar;
