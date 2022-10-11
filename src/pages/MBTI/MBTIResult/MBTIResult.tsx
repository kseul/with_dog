import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import styled from 'styled-components/macro';
import MBTIResultInfo from './MBTIResultInfo';
import ResultBackground from 'assets/images/MBTIResult.jpg';
import { useEffect } from 'react';

export let mbtiUrl = '';

const MBTIResult = () => {
  const graphResult = useSelector((state: RootState) => state.graph);
  const mbtiResultText = useSelector((state: RootState) => state.mbtiText);

  const sendUrl = mbtiResultText => {
    mbtiUrl = mbtiResultText;
  };

  useEffect(() => {
    sendUrl(mbtiResultText);
  }, []);

  return (
    <MBTIResultContainer>
      <MBTIResultWrapper>
        <MBTIResultBox>
          <MBTIResultInfo
            graphResult={graphResult}
            mbtiResultText={mbtiResultText}
          />
        </MBTIResultBox>
      </MBTIResultWrapper>
    </MBTIResultContainer>
  );
};

const MBTIResultContainer = styled.div`
  ${props => props.theme.flex.flexBox('column', 'center', 'center')};
  width: 100vw;
  height: auto;
  margin: 0 auto;
  background-image: url(${ResultBackground});
  background-size: cover;
`;

const MBTIResultWrapper = styled.div`
  ${props => props.theme.flex.flexBox('', 'center', 'center')};
  width: 100%;
`;

const MBTIResultBox = styled.div`
  ${props => props.theme.flex.flexBox('column', 'center', 'center')};
  width: 87.5rem;
  height: 240rem;
  margin: 8rem 0 3rem 0;
  background-color: white;
  border-radius: 1.25rem;
`;

export default MBTIResult;
