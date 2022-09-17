import styled from 'styled-components/macro';
import { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar';
import EnergyTest from './Energy/EnergyTest';
import RelationTest from './Relation/RelationTest';
import ReactionTest from './Reaction/ReactionTest';
import JudgementTest from './Judgement/JudgementTest';
import { AnswerType } from 'types/type';
import { MBTIScoreProps } from 'types/type';
import { JoinMBTI } from 'types/type';
import { useDispatch } from 'react-redux';
import setMbtiResults from 'redux/actions/mbtiResult';
import setMbtiTexts from 'redux/actions/mbtiText';
import { useNavigate } from 'react-router-dom';
import { RootState } from 'redux/reducers';
import { useSelector } from 'react-redux';

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
        mbti: 'E',
        score: energyScore,
        layout: 'lefttop',
      });
    } else if (energyScore > 0) {
      setMBTIResult.push({
        id: 0,
        mbti: 'I',
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

  const onClickCheck = (): void => {
    setIsChecked(!isChecked);
  };

  const onEnergyCheck = (): void => {
    setNextPage(!nextPage);
  };

  const onRelationCheck = (): void => {
    setNextRelationPage(!nextRelationPage);
  };

  const onReactionCheck = (): void => {
    setNextReactionPage(!nextReactionPage);
  };

  const onJudgementCheck = (): void => {
    setNextJudgementPage(!nextJudgementPage);
    navigate('/mbti-result');
    dispatch(setMbtiResults(setMBTIResult));
    dispatch(setMbtiTexts(mbtiObj));
  };

  const handleSetEnergyName = (value: string, id: number): void => {
    setEnergyNameList(prev => prev.concat({ testId: id, answerValue: value }));
    const inputItemsCopy = energyNameList;
    inputItemsCopy[id].answerValue = value;
    setEnergyNameList(inputItemsCopy);
  };

  const handleSetRelationName = (value: string, id: number): void => {
    setRelationNameList(
      relationNameList.concat({ testId: id, answerValue: value })
    );
    const inputItemsCopy = relationNameList;
    inputItemsCopy[id].answerValue = value;
    setRelationNameList(inputItemsCopy);
  };

  const handleSetReactionName = (value: string, id: number): void => {
    setReactionNameList(
      reactionNameList.concat({ testId: id, answerValue: value })
    );
    const inputItemsCopy = reactionNameList;
    inputItemsCopy[id].answerValue = value;
    setReactionNameList(inputItemsCopy);
  };

  const handleSetJudgementName = (value: string, id: number): void => {
    setJudgementNameList(
      judgementNameList.concat({ testId: id, answerValue: value })
    );
    const inputItemsCopy = judgementNameList;
    inputItemsCopy[id].answerValue = value;
    setJudgementNameList(inputItemsCopy);
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
  // console.log({ energyNameList });
  // console.log(energyNameList.length);
  // console.log(typeof energyNameList);

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
  width: 100vw;
  height: 100%;
  margin: 0 auto;
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
