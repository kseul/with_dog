import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import styled from 'styled-components/macro';
import MBTIResultInfo from './MBTIResultInfo';
import ResultBackground from 'assets/images/MBTIResult.jpg';

const MBTIResult = () => {
  const graphResult = useSelector((state: RootState) => state.graph);
  const mbtiResultText = useSelector((state: RootState) => state.mbtiText);

  return (
    <MBTIResultContainer>
      <MBTIResultBox>
        <MBTIResultInfo
          graphResult={graphResult}
          mbtiResultText={mbtiResultText}
        />
      </MBTIResultBox>
    </MBTIResultContainer>
  );
};

const MBTIResultContainer = styled.div`
  ${props => props.theme.flex.flexBox('column', 'center', 'center')};
  width: 100vw;
  height: 240rem;
  background-image: url(${ResultBackground});
  background-size: cover;
`;

const MBTIResultBox = styled.div`
  ${props => props.theme.flex.flexBox('column', 'center', 'center')};
  width: 87.5rem;
  height: 100%;
  margin: 8rem 0 3rem 0;
  padding: 5rem 0;
  background-color: white;
  border-radius: 1.25rem;
`;

export default MBTIResult;
