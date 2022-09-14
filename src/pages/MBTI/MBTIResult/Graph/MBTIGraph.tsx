import styled from 'styled-components/macro';
import GraphComponent from './GraphComponent';
import { MBTI_RESULT_DATA } from '../constants/Result';

const MBTIGraph = () => {
  return (
    <MBTIGraphContainer>
      {MBTI_RESULT_DATA.map(({ mbti, score, id, layout }) => (
        <GraphComponent key={id} mbti={mbti} score={score} layout={layout} />
      ))}
    </MBTIGraphContainer>
  );
};

const MBTIGraphContainer = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'center')};
  width: 75rem;
  height: 18.75rem;
  margin: 0 auto;
`;

export default MBTIGraph;
