import styled from 'styled-components/macro';
import GraphComponent from './GraphComponent';

const MBTIGraph = ({ graphResult }) => {
  return (
    <MBTIGraphContainer>
      {graphResult.map(({ mbti, score, id, layout }) => (
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
