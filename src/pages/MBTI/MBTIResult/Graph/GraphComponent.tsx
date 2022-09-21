import styled, { css } from 'styled-components/macro';
import { MBTIResultProps } from 'types/type';

const GraphComponent = ({ mbti, score, layout }: MBTIResultProps) => {
  const titleProps = (mbti: string) => {
    if (mbti === 'E' || mbti === 'I') {
      return '활동성';
    } else if (mbti === 'S' || mbti === 'N') {
      return '관계성';
    } else if (mbti === 'T' || mbti === 'F') {
      return '반응';
    } else if (mbti === 'P' || mbti === 'C') {
      return '판단';
    }
  };

  const propsMBTI = (mbti: string) => {
    if (mbti === 'E') {
      return '#E4A6AB';
    } else if (mbti === 'I') {
      return '#1D4260';
    } else if (mbti === 'S') {
      return '#FCD148';
    } else if (mbti === 'N') {
      return '#99BABB';
    } else if (mbti === 'T') {
      return '#FF89AE';
    } else if (mbti === 'F') {
      return '#96AAE0';
    } else if (mbti === 'P') {
      return '#7EA296';
    } else if (mbti === 'C') {
      return '#67CBB3';
    }
  };

  const leftScore = (score: number) => {
    if (score > 0) {
      return 5 * (10 + score);
    } else if (score < 0) {
      return 5 * (10 - score);
    }
  };
  const leftScoreProps = leftScore(score);
  const rightScoreProps = 100 - leftScoreProps!;

  const colorResult = propsMBTI(mbti);
  const propensityText = titleProps(mbti);

  return (
    <GraphComponentContainer layout={layout}>
      <PropensityText>{propensityText}</PropensityText>
      <GrapgComponentBox>
        <GraphComponentPostion
          leftScoreProps={leftScoreProps!}
          colorResult={colorResult!}
        />
      </GrapgComponentBox>
      <TextBox>
        <GraphLeftText mbti={mbti}>{leftScoreProps}%</GraphLeftText>
        <GraphRightText>{rightScoreProps}%</GraphRightText>
      </TextBox>
    </GraphComponentContainer>
  );
};

const BasicText = css`
  text-align: center;
`;

const GraphComponentContainer = styled.div<{ layout: string }>`
  ${props => props.theme.flex.flexBox('column', 'center', 'center')}
  left: ${props => (props.layout === 'lefttop' ? `24%` : '')};
  left: ${props => (props.layout === 'leftbottom' ? `24%` : '')};
  right: ${props => (props.layout === 'righttop' ? `24%` : '')};
  right: ${props => (props.layout === 'rightbottom' ? `24%` : '')};
  bottom: ${props => (props.layout === 'leftbottom' ? `-95%` : '')};
  bottom: ${props => (props.layout === 'rightbottom' ? `-95%` : '')};
  width: 25rem;
`;

const PropensityText = styled.span`
  ${BasicText}
  margin-bottom: 1.563rem;
  font-size: 1.25rem;
  font-weight: 500;
`;

const GrapgComponentBox = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'center')}
  position: absolute;
  width: 25rem;
  height: 2.188rem;
  margin-top: 1rem;
  background-color: #edeef0;
  border-radius: 5rem;
`;

const GraphComponentPostion = styled.div<{
  leftScoreProps: number;
  colorResult: string;
}>`
  position: relative;
  width: ${({ leftScoreProps }) => leftScoreProps}%;
  height: 2.188rem;
  margin-right: auto;
  background-color: ${({ colorResult }) => colorResult};
  border-radius: ${props =>
    props.leftScoreProps === 100 ? `5rem` : `5rem 0 0 5rem`};
  transition: width 0.5s ease-in-out;
`;

const TextBox = styled.span`
  ${props => props.theme.flex.flexBox('row', 'center', 'space-between')}
  position: relative;
  width: 21.875rem;
  margin-bottom: 1.875rem;
`;

const GraphLeftText = styled.span<{ mbti: string }>`
  text-align: center;
  color: ${props => (props.mbti === 'I' ? `white` : `#333333`)};
`;

const GraphRightText = styled.span`
  text-align: center;
  color: #333333;
`;

export default GraphComponent;
