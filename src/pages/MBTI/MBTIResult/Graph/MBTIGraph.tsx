import styled from 'styled-components/macro';
import EnergyGraph from './EnergyGraph';
import RelationGraph from './RelationGraph';
import ReactionGraph from './ReactionGraph';
import JudgementGraph from './JudgementGraph';

const MBTIGraph = () => {
  return (
    <MBTIGraphContainer>
      <HorizontalAlign>
        <EnergyGraph />
        <RelationGraph />
      </HorizontalAlign>
      <HorizontalAlign>
        <ReactionGraph />
        <JudgementGraph />
      </HorizontalAlign>
    </MBTIGraphContainer>
  );
};

const MBTIGraphContainer = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'center')};
  width: 75rem;
  height: 18.75rem;
  margin: 0 auto;
`;

const HorizontalAlign = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'space-between')};
  width: 30.625rem;
  height: 12.5rem;
  margin: 0 auto;
`;

export default MBTIGraph;
