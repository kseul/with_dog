import styled, { css } from 'styled-components/macro';

const JudgementGraph = () => {
  const percentLength = 4;
  const mbtiResult = 'C';
  return (
    <JudgementGraphContainer>
      <PropensityText>판단</PropensityText>
      {mbtiResult === 'C' ? (
        <>
          <ReactionCGraphBox>
            <ReactionCGraphPosition percentLength={percentLength} />
          </ReactionCGraphBox>
          <TextBox>
            <GraphLeftText>70%</GraphLeftText>
            <GraphRightText>30%</GraphRightText>
          </TextBox>
        </>
      ) : (
        <>
          <ReactionPGraphBox>
            <ReactionPGraphPosition percentLength={percentLength} />
          </ReactionPGraphBox>
          <TextBox>
            <GraphLeftText>70%</GraphLeftText>
            <GraphRightText>30%</GraphRightText>
          </TextBox>
        </>
      )}
    </JudgementGraphContainer>
  );
};

const BasicText = css`
  color: #333333;
  text-align: center;
`;

const JudgementGraphContainer = styled.div`
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

const ReactionPGraphBox = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'center')}
  width: 25rem;
  height: 2.188rem;
  margin-top: 1rem;
  background-color: #edeef0;
  border-radius: 5rem;
`;

const ReactionPGraphPosition = styled.div<{ percentLength: number }>`
  position: relative;
  width: ${({ percentLength }) => 5 * (10 + percentLength)}%;
  height: 2.188rem;
  margin-right: auto;
  background-color: #7ea296;
  border-radius: 1.875rem 0 0 1.875rem;
  transition: width 0.5s ease-in-out;
`;

const ReactionCGraphBox = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'center')}
  position: absolute;
  width: 25rem;
  height: 2.188rem;
  margin-top: 1rem;
  background-color: #edeef0;
  border-radius: 5rem;
`;

const ReactionCGraphPosition = styled.div<{ percentLength: number }>`
  position: relative;
  width: ${({ percentLength }) => 5 * (10 + percentLength)}%;
  height: 2.188rem;
  margin-right: auto;
  background-color: #67cbb3;
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

export default JudgementGraph;
