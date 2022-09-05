import styled, { css } from 'styled-components/macro';

const EnergyGraph = () => {
  const percentLength = 4;
  return (
    <EnergyGraphContainer>
      <EnergyGraphWrapper>
        <EnergyGraphPosition percentLength={percentLength} />
      </EnergyGraphWrapper>
    </EnergyGraphContainer>
  );
};

const BasicText = css`
  text-align: center;
  color: #333333;
`;

const EnergyGraphContainer = styled.div`
  ${props => props.theme.flex.flexBox('column', 'center', 'center')}
  margin-top: 10px;
`;

const EnergyGraphWrapper = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'center')}
  margin-top: 1rem;
  width: 490px;
  height: 45px;
  background-color: #edeef0;
  border-radius: 5rem;
`;

const EnergyGraphPosition = styled.div<{ percentLength: number }>`
  width: ${({ percentLength }) => 5 * (10 + percentLength)}%;
  height: 45px;
  margin-right: auto;
  background-color: #e4a6ab;
  border-radius: 1.875rem 0 0 1.875rem;
  transition: width 0.5s ease-in-out;
`;

const GraphEText = styled.span`
  ${BasicText}
`;

const GraphIText = styled.span`
  ${BasicText}
  margin-right: 10px;
`;

export default EnergyGraph;
