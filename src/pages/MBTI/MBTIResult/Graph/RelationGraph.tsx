import styled, { css } from 'styled-components/macro';

const RelationGraph = () => {
  const percentLength = 4;
  const mbtiResult = 'S';
  return (
    <RelationGraphContainer>
      <PropensityText>관계성</PropensityText>
      {mbtiResult === 'S' ? (
        <>
          <ReactionSGraphBox>
            <ReactionSGraphPosition percentLength={percentLength} />
          </ReactionSGraphBox>
          <TextBox>
            <GraphLeftText>70%</GraphLeftText>
            <GraphRightText>30%</GraphRightText>
          </TextBox>
        </>
      ) : (
        <>
          <ReactionNGraphBox>
            <ReactionNGraphPosition percentLength={percentLength} />
          </ReactionNGraphBox>
          <TextBox>
            <GraphLeftText>70%</GraphLeftText>
            <GraphRightText>30%</GraphRightText>
          </TextBox>
        </>
      )}
    </RelationGraphContainer>
  );
};

const BasicText = css`
  color: #333333;
  text-align: center;
`;

const RelationGraphContainer = styled.div`
  ${props => props.theme.flex.flexBox('column', 'center', 'center')}
  position: absolute;
  width: 25rem;
  margin-top: 15rem;
`;

const PropensityText = styled.span`
  ${BasicText}
  margin-bottom: 1.563rem;
  font-size: 1.25rem;
  font-weight: 500;
`;

const ReactionNGraphBox = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'center')}
  width: 25rem;
  height: 2.188rem;
  margin-top: 1rem;
  background-color: #edeef0;
  border-radius: 5rem;
`;

const ReactionNGraphPosition = styled.div<{ percentLength: number }>`
  position: relative;
  width: ${({ percentLength }) => 5 * (10 + percentLength)}%;
  height: 2.188rem;
  margin-right: auto;
  background-color: #99babb;
  border-radius: 1.875rem 0 0 1.875rem;
  transition: width 0.5s ease-in-out;
`;

const ReactionSGraphBox = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'center')}
  position: absolute;
  width: 25rem;
  height: 2.188rem;
  margin-top: 1rem;
  background-color: #edeef0;
  border-radius: 5rem;
`;

const ReactionSGraphPosition = styled.div<{ percentLength: number }>`
  position: relative;
  width: ${({ percentLength }) => 5 * (10 + percentLength)}%;
  height: 2.188rem;
  margin-right: auto;
  background-color: #fcd148;
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

export default RelationGraph;
