import styled from 'styled-components/macro';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import setMbtiResults from 'redux/actions/mbtiResult';
import setMbtiTexts from 'redux/actions/mbtiText';
import userActions from 'redux/actions/user';
import ProgressBar from './ProgressBar';
import EnergyTest from './Energy/EnergyTest';
import RelationTest from './Relation/RelationTest';
import ReactionTest from './Reaction/ReactionTest';
import JudgementTest from './Judgement/JudgementTest';
import { AnswerType } from 'types/type';
import { MBTIScoreProps } from 'types/type';
import { JoinMBTI } from 'types/type';

const MBTITest = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [nextPage, setNextPage] = useState(false);
  const [nextRelationPage, setNextRelationPage] = useState(false);
  const [nextReactionPage, setNextReactionPage] = useState(false);
  const [nextJudgementPage, setNextJudgementPage] = useState(false);

  const [energyNameList, setEnergyNameList] = useState<AnswerType[]>([]);
  const [relationNameList, setRelationNameList] = useState<AnswerType[]>([]);
  const [reactionNameList, setReactionNameList] = useState<AnswerType[]>([]);
  const [judgementNameList, setJudgementNameList] = useState<AnswerType[]>([]);
  const [mbtiText, setMbtiText] = useState<JoinMBTI>({ mbti: '' });
  const dispatch = useDispatch();

  const numberArr = value => {
    const newArr = [0, 0, 0, 0, 0];
    for (let i = 0; i < value.length; i++) {
      if (value[i] === '매우 아니다') {
        newArr[i] = -2;
      } else if (value[i] === '아니다') {
        newArr[i] = -1;
      } else if (value[i] === '그렇다') {
        newArr[i] = 1;
      } else if (value[i] === '매우 그렇다') {
        newArr[i] = 2;
      }
    }
    const sumResult = newArr.reduce((a, b) => a + b);
    if (sumResult === 0) {
      return newArr[0];
    } else {
      return sumResult;
    }
  };

  const energyAnswerResult = energyNameList.map(a => a.answerValue);
  const relationAnswerResult = relationNameList.map(a => a.answerValue);
  const reactionAnswerResult = reactionNameList.map(a => a.answerValue);
  const judgementAnswerResult = judgementNameList.map(a => a.answerValue);
  const setMBTIResult: MBTIScoreProps[] = [];
  const navigate = useNavigate();

  const setEnergy = (energyAnswerResult): void => {
    const energyScore = numberArr(energyAnswerResult);
    if (energyScore < 0) {
      setMBTIResult.push({
        id: 0,
        mbti: 'I',
        score: energyScore,
        layout: 'lefttop',
      });
    } else if (energyScore > 0) {
      setMBTIResult.push({
        id: 0,
        mbti: 'E',
        score: energyScore,
        layout: 'lefttop',
      });
    }
  };

  const setRelation = (relationAnswerResult): void => {
    const relationScore = numberArr(relationAnswerResult);
    if (relationScore < 0) {
      setMBTIResult.push({
        id: 1,
        mbti: 'S',
        score: relationScore,
        layout: 'leftbottom',
      });
    } else if (relationScore > 0) {
      setMBTIResult.push({
        id: 1,
        mbti: 'N',
        score: relationScore,
        layout: 'leftbottom',
      });
    }
  };

  const setReaction = (reactionAnswerResult): void => {
    const reactionScore = numberArr(reactionAnswerResult);
    if (reactionScore < 0) {
      setMBTIResult.push({
        id: 2,
        mbti: 'F',
        score: reactionScore,
        layout: 'righttop',
      });
    } else if (reactionScore > 0) {
      setMBTIResult.push({
        id: 2,
        mbti: 'T',
        score: reactionScore,
        layout: 'righttop',
      });
    }
  };

  const setJudgement = judgementAnswerResult => {
    const judgementScore = numberArr(judgementAnswerResult);
    if (judgementScore < 0) {
      setMBTIResult.push({
        id: 3,
        mbti: 'C',
        score: judgementScore,
        layout: 'rightbottom',
      });
    } else if (judgementScore > 0) {
      setMBTIResult.push({
        id: 3,
        mbti: 'P',
        score: judgementScore,
        layout: 'rightbottom',
      });
    }
  };

  setEnergy(energyAnswerResult);
  setRelation(relationAnswerResult);
  setReaction(reactionAnswerResult);
  setJudgement(judgementAnswerResult);

  const mbtiObj = {};
  const joinMbtiText = setMBTIResult.map(obj => obj.mbti).join('');
  mbtiObj['mbti'] = joinMbtiText;
  const mbtiUserData = Object.values(mbtiObj).toString();

  const onClickCheck = (): void => {
    setIsChecked(!isChecked);
  };

  const onEnergyCheck = (): void => {
    setNextPage(!nextPage);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const onRelationCheck = (): void => {
    setNextRelationPage(!nextRelationPage);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const onReactionCheck = (): void => {
    setNextReactionPage(!nextReactionPage);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const checkLogin = useSelector((state: RootState) => state.user);

  const onJudgementCheck = (): void => {
    setNextJudgementPage(!nextJudgementPage);
    navigate('/mbti-result');
    dispatch(setMbtiResults(setMBTIResult));
    dispatch(setMbtiTexts(mbtiUserData));
    {
      checkLogin.LoggedIn === true
        ? dispatch(userActions.setMBTI(mbtiUserData))
        : dispatch(userActions.setMBTI(mbtiUserData));
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleSetEnergyName = (value, id) => {
    const newArr = [0];
    for (let i = 0; i < energyNameList.length; i++) {
      if (energyNameList[i].testId === id) {
        energyNameList[i].answerValue = value;
      } else {
        newArr[0]++;
      }
    }
    if (newArr[0] === energyNameList.length) {
      energyNameList.push({ testId: id, answerValue: value });
    }
    setEnergyNameList(energyNameList);
  };

  const handleSetRelationName = (value: string, id: number): void => {
    const newArr = [0];
    for (let i = 0; i < relationNameList.length; i++) {
      if (relationNameList[i].testId === id) {
        relationNameList[i].answerValue = value;
      } else {
        newArr[0]++;
      }
    }
    if (newArr[0] === relationNameList.length) {
      relationNameList.push({ testId: id, answerValue: value });
    }
    setRelationNameList(relationNameList);
  };

  const handleSetReactionName = (value: string, id: number): void => {
    const newArr = [0];
    for (let i = 0; i < reactionNameList.length; i++) {
      if (reactionNameList[i].testId === id) {
        reactionNameList[i].answerValue = value;
      } else {
        newArr[0]++;
      }
    }
    if (newArr[0] === reactionNameList.length) {
      reactionNameList.push({ testId: id, answerValue: value });
    }
    setReactionNameList(reactionNameList);
  };

  const handleSetJudgementName = (value: string, id: number): void => {
    const newArr = [0];
    for (let i = 0; i < judgementNameList.length; i++) {
      if (judgementNameList[i].testId === id) {
        judgementNameList[i].answerValue = value;
      } else {
        newArr[0]++;
      }
    }
    if (newArr[0] === judgementNameList.length) {
      judgementNameList.push({ testId: id, answerValue: value });
    }
    setJudgementNameList(judgementNameList);
  };

  const energyLength = energyNameList.length;
  const relationLength = relationNameList.length;
  const reactionLength = reactionNameList.length;
  const judgementLength = judgementNameList.length;
  const percentLength =
    energyNameList.length +
    relationNameList.length +
    reactionNameList.length +
    judgementNameList.length;

  useEffect(() => {
    setMbtiText(mbtiObj);
  }, []);

  return (
    <MBTITestContainer>
      <ProgressBar percentLength={percentLength} />
      <TestBox>
        {nextPage === false && (
          <EnergyTest
            handleSetEnergyName={handleSetEnergyName}
            onClickCheck={onClickCheck}
            energyLength={energyLength}
            onEnergyCheck={onEnergyCheck}
          />
        )}

        {nextPage === true && nextRelationPage === false && (
          <RelationTest
            handleSetRelationName={handleSetRelationName}
            onClickCheck={onClickCheck}
            relationLength={relationLength}
            onRelationCheck={onRelationCheck}
          />
        )}
        {nextPage === true &&
          nextRelationPage === true &&
          nextReactionPage === false && (
            <ReactionTest
              handleSetReactionName={handleSetReactionName}
              onClickCheck={onClickCheck}
              reactionLength={reactionLength}
              onReactionCheck={onReactionCheck}
            />
          )}
        {nextPage === true &&
          nextRelationPage === true &&
          nextReactionPage === true && (
            <JudgementTest
              handleSetJudgementName={handleSetJudgementName}
              onClickCheck={onClickCheck}
              judgementLength={judgementLength}
              onJudgementCheck={onJudgementCheck}
            />
          )}
      </TestBox>
    </MBTITestContainer>
  );
};

const MBTITestContainer = styled.div`
  ${props => props.theme.flex.flexBox('column', 'center', 'center')};
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding-top: 150px;
  background-color: #edeef0;
`;

const TestBox = styled.div`
  ${props => props.theme.flex.flexBox('column', 'center', 'center')};
  width: 75rem;
  height: 100%;
  margin-bottom: 1.875rem;
  background-color: white;
  border-radius: 1.25rem;
`;

export default MBTITest;
