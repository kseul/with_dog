import React from 'react';
import styled, { css } from 'styled-components/macro';
import MBTIGraph from './Graph/MBTIGraph';
import ChatroomRecommendation from './ChatroomRecommendation';
import SNSshare from './SNSshare';
import ResultInfo from 'assets/svg/ResultInfoPositoin.svg';
import ResultNotice from 'assets/svg/ResultNoticePositoin.svg';
import { MBTI_RESULT } from './constants/Result';

const MBTIResultInfo = ({ graphResult, mbtiResultText }) => {
  const getMBTIResult: string = Object.values(mbtiResultText.mbti).toString();
  const resultMBTI = MBTI_RESULT.filter(item => {
    return item.MBTI === getMBTIResult;
  });

  return (
    <MBTIResultInfoContainer>
      {resultMBTI.map(
        ({ MBTI, MBTICharacter, MBTIImage, MBTIPosition, resultId }) => (
          <React.Fragment key={resultId}>
            <MBTIDOG src={MBTIImage} />
            <MBTIResult>{MBTI}</MBTIResult>
            <MBTICharacterText>{MBTICharacter}</MBTICharacterText>
            <MBTIContent>
              에너지가 넘치는 꾸러기 댕댕이군요! 에너지를 분출시켜주기 위해서
              자주 산책을 시켜주는 것이 좋을 것 같아요! 다른 강아지한테 장난도
              많고 나한테도 장난을 많이 치는 성격인데 확실히 교육과 놀이를
              구분시켜 가르칠 필요가 있습니다! 흥분을 절제하는 방법을 교육
              시키는 것 또한 좋아보입니다!
            </MBTIContent>
            <NoticeImage src={ResultNotice} />
            <GraphInfo src={ResultInfo} />
            <MBTIGraph graphResult={graphResult} />
            <GraphSummary src={MBTIPosition} />
          </React.Fragment>
        )
      )}
      <ChatroomRecommendation />
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
  margin: 3rem 15rem 0 15rem;
  line-height: 2rem;
  font-size: 1.25rem;
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
  margin-top: 9.375rem;
`;

export default MBTIResultInfo;
