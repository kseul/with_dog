import styled, { css } from 'styled-components/macro';

const EnergyGraph = () => {
  const percentLength = 4;
  const mbtiResult = 'E';
  return (
    <EnergyGraphContainer>
      <PropensityText>활동성</PropensityText>
      {mbtiResult === 'E' ? (
        <>
          <EnergyEGraphBox>
            <EnergyEGraphPosition percentLength={percentLength} />
          </EnergyEGraphBox>
          <TextBox>
            <GraphLeftText>70%</GraphLeftText>
            <GraphRightText>30%</GraphRightText>
          </TextBox>
        </>
      ) : (
        <>
          <EnergyIGraphBox>
            <EnergyIGraphPosition percentLength={percentLength} />
          </EnergyIGraphBox>
          <TextBox>
            <GraphLeftIText>70%</GraphLeftIText>
            <GraphRightText>30%</GraphRightText>
          </TextBox>
        </>
      )}
    </EnergyGraphContainer>
  );
};

const BasicText = css`
  color: #333333;
  text-align: center;
`;

const EnergyGraphContainer = styled.div`
  ${props => props.theme.flex.flexBox('column', 'center', 'center')}
  position: absolute;
  width: 25rem;
`;

const PropensityText = styled.span`
  ${BasicText}
  margin-bottom: 1.563rem;
  font-size: 1.25rem;
  font-weight: 500;
`;

const EnergyIGraphBox = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'center')}
  width: 25rem;
  height: 2.188rem;
  margin-top: 1rem;
  background-color: #edeef0;
  border-radius: 5rem;
`;

const EnergyIGraphPosition = styled.div<{ percentLength: number }>`
  position: relative;
  width: ${({ percentLength }) => 5 * (10 + percentLength)}%;
  height: 2.188rem;
  margin-right: auto;
  background-color: #1d4260;
  border-radius: 1.875rem 0 0 1.875rem;
  transition: width 0.5s ease-in-out;
`;

const EnergyEGraphBox = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'center')}
  position: absolute;
  width: 25rem;
  height: 2.188rem;
  margin-top: 1rem;
  background-color: #edeef0;
  border-radius: 5rem;
`;

const EnergyEGraphPosition = styled.div<{ percentLength: number }>`
  position: relative;
  width: ${({ percentLength }) => 5 * (10 + percentLength)}%;
  height: 2.188rem;
  margin-right: auto;
  background-color: #e4a6ab;
  border-radius: 1.875rem 0 0 1.875rem;
  transition: width 0.5s ease-in-out;
`;

const TextBox = styled.span`
  ${props => props.theme.flex.flexBox('row', 'center', 'space-between')}
  position: relative;
  width: 21.875rem;
  margin-bottom: 1.875rem;
  z-index: 1;
`;

const GraphLeftText = styled.span`
  ${BasicText}
`;

const GraphLeftIText = styled.span`
  color: white;
`;

const GraphRightText = styled.span`
  ${BasicText}
`;

export default EnergyGraph;
