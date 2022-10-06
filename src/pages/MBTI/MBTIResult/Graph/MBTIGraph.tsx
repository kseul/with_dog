import styled from 'styled-components/macro';
import GraphComponent from './GraphComponent';

const MBTIGraph = ({ graphResult }) => {
  return (
    <MBTIGraphContainer>
      <MBTIGraphWrapper>
        {graphResult.map(({ mbti, score, id, layout }) => (
          <GraphComponent key={id} mbti={mbti} score={score} layout={layout} />
        ))}
      </MBTIGraphWrapper>
    </MBTIGraphContainer>
  );
};

const MBTIGraphContainer = styled.div`
  display: grid;
  justify-items: center;
  width: 100%;
  height: 100%;
`;

const MBTIGraphWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  width: 70rem;
  height: 18.75rem;
  padding-bottom: 1rem;
`;

export default MBTIGraph;
