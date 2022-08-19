import styled from 'styled-components/macro';
import ProgressBar from './ProgressBar';
import TestDetail from './TestDetail';

const MBTITest = () => {
  return (
    <MBTITestContainer>
      <ProgressBar />
      <TestDetail />
    </MBTITestContainer>
  );
};

const MBTITestContainer = styled.div`
  ${props => props.theme.flex.flexBox('column')}
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  background-color: #edeef0;
`;

export default MBTITest;
