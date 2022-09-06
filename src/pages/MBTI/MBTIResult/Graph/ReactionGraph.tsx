import styled, { css } from 'styled-components/macro';

const ReactionGraph = () => {
  const percentLength = 4;
  const mbtiResult = 'F';
  return (
    <ReactionGraphContainer>
      <PropensityText>반응</PropensityText>
      {mbtiResult === 'F' ? (
        <>
          <ReactionFGraphBox>
            <ReactionFGraphPosition percentLength={percentLength} />
          </ReactionFGraphBox>
          <TextBox>
            <GraphLeftText>70%</GraphLeftText>
            <GraphRightText>30%</GraphRightText>
          </TextBox>
        </>
      ) : (
        <>
          <ReactionTGraphBox>
            <ReactionTGraphPosition percentLength={percentLength} />
          </ReactionTGraphBox>
          <TextBox>
            <GraphLeftText>70%</GraphLeftText>
            <GraphRightText>30%</GraphRightText>
          </TextBox>
        </>
      )}
    </ReactionGraphContainer>
  );
};

const BasicText = css`
  color: #333333;
  text-align: center;
`;

const ReactionGraphContainer = styled.div`
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

const ReactionTGraphBox = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'center')}
  width: 25rem;
  height: 2.188rem;
  margin-top: 1rem;
  background-color: #edeef0;
  border-radius: 5rem;
`;

const ReactionTGraphPosition = styled.div<{ percentLength: number }>`
  position: relative;
  width: ${({ percentLength }) => 5 * (10 + percentLength)}%;
  height: 2.188rem;
  margin-right: auto;
  background-color: #ff89ae;
  border-radius: 1.875rem 0 0 1.875rem;
  transition: width 0.5s ease-in-out;
`;

const ReactionFGraphBox = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'center')}
  position: absolute;
  width: 25rem;
  height: 2.188rem;
  margin-top: 1rem;
  background-color: #edeef0;
  border-radius: 5rem;
`;

const ReactionFGraphPosition = styled.div<{ percentLength: number }>`
  position: relative;
  width: ${({ percentLength }) => 5 * (10 + percentLength)}%;
  height: 2.188rem;
  margin-right: auto;
  background-color: #96aae0;
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

const GraphRightText = styled.span`
  ${BasicText}
`;

export default ReactionGraph;
