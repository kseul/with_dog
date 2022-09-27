import React from 'react';
import styled, { css } from 'styled-components/macro';
import MBTIGraph from './Graph/MBTIGraph';
import ChatroomRecommendation from './ChatroomRecommendation';
import SNSshare from './SNSshare';
import ResultInfo from 'assets/svg/ResultInfoPositoin2.svg';
import ResultNotice from 'assets/svg/MBTINotice6.svg';
import { MBTI_RESULT } from './constants/Result';
import UserCounter from './UserCounter';

const MBTIResultInfo = ({ graphResult, mbtiResultText }) => {
  const getMBTIResult: string = Object.values(mbtiResultText).toString();
  const resultMBTI = MBTI_RESULT.filter(item => {
    return item.MBTI === getMBTIResult;
  });

  return (
    <MBTIResultInfoContainer>
      {resultMBTI.map(
        ({
          MBTI,
          MBTICharacter,
          MBTIImage,
          MBTIPosition,
          resultId,
          content,
        }) => (
          <React.Fragment key={resultId}>
            <MBTIDOG src={MBTIImage} />
            <MBTIResult>{MBTI}</MBTIResult>
            <MBTICharacterText>{MBTICharacter}</MBTICharacterText>
            <MBTIContentBackground>
              <MBTIContent>{content}</MBTIContent>
            </MBTIContentBackground>

            <NoticeImage src={ResultNotice} />
            <GraphInfo src={ResultInfo} />
            <MBTIGraph graphResult={graphResult} />
            <GraphSummary src={MBTIPosition} />
          </React.Fragment>
        )
      )}
      <ChatroomRecommendation />
      <UserCounter />
      <SNSshare />
    </MBTIResultInfoContainer>
  );
};
const BasicText = css`
  text-align: center;
  color: #333333;
`;

const MBTIResultInfoContainer = styled.div`
  ${props => props.theme.flex.flexBox('column', 'center', 'center')};
  margin: 0 auto;
  width: 100%;
`;

const MBTIDOG = styled.img`
  height: 33rem;
`;

const MBTIResult = styled.span`
  margin-top: 3rem;
  font-size: 3.125rem;
  font-weight: 500;
  ${BasicText}
`;

const MBTICharacterText = styled.span`
  margin-top: 1rem;
  font-size: 1.2rem;
  ${BasicText}
`;

const MBTIContentBackground = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'center')};
  margin: 3rem 18rem 3rem 18rem;
  padding: 3rem;
  width: 60.625rem;
  height: 12rem;
  border-radius: 2rem;
  background-color: #a8e1dc;
  /* background: linear-gradient(to bottom right, #8fefe6, #c3c8f3); */
`;

const MBTIContent = styled.span`
  line-height: 2.3rem;
  font-size: 1.25rem;
  ${BasicText}
`;

const NoticeImage = styled.img`
  width: 60rem;
  margin: 5rem 0;
`;

const GraphInfo = styled.img`
  width: 60.625rem;
  margin: 5rem 0;
`;

const GraphSummary = styled.img`
  width: 37.5rem;
  margin: 4.6rem 0;
`;

export default MBTIResultInfo;
