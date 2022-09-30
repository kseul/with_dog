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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  width: 75rem;
  height: 18.75rem;
`;

export default MBTIGraph;
