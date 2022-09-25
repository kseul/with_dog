import React from 'react';
import styled, { css } from 'styled-components/macro';
import MBTIGraph from './Graph/MBTIGraph';
import ChatroomRecommendation from './ChatroomRecommendation';
import SNSshare from './SNSshare';
import ResultInfo from 'assets/svg/ResultInfoPositoin.svg';
import ResultNotice from 'assets/svg/ResultNoticePositoin.svg';
import { MBTI_RESULT } from './constants/Result';
import UserCounter from './UserCounter';

const MBTIResultInfo = ({ graphResult, mbtiResultText }) => {
  const getMBTIResult: string = Object.values(mbtiResultText.mbti).toString();
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
            <MBTIContent>{content}</MBTIContent>
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
  width: 20rem;
`;

const MBTIResult = styled.span`
  margin-top: 3rem;
  font-size: 3.125rem;
  font-weight: 500;
  ${BasicText}
`;

const MBTICharacterText = styled.span`
  margin-top: 1rem;
  font-size: 1.125rem;
  ${BasicText}
`;

const MBTIContent = styled.span`
  margin: 3rem 20rem 0 20rem;
  line-height: 2rem;
  font-size: 1.2rem;
  ${BasicText}
`;

const NoticeImage = styled.img`
  width: 58.125rem;
  margin-top: 5rem;
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
