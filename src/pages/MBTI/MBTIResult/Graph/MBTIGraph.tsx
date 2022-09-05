import styled, { css } from 'styled-components/macro';
import EnergyGraph from './EnergyGraph';

const MBTIGraph = () => {
  return (
    <MBTIGraphContainer>
      <PropensityText>활동성</PropensityText>
      <EnergyGraph />
    </MBTIGraphContainer>
  );
};

const MBTIGraphContainer = styled.div`
  ${props => props.theme.flex.flexBox('column', 'center', 'center')};
  width: 100%;
  height: 100%;
`;

const PropensityText = styled.span`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: #333333;
`;

const HorizontalAlign = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'center')};
`;

const GraphAlign = styled.div``;
export default MBTIGraph;
