import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { ANSWER_DB } from './constants/Test';

const Answer = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [chekced, setChecked] = useState<string>();

  const test_check = null; // 문제가 모두 체크 됐는가
  const num_of_test = 20; // 문제의 총 개수 저장

  const checkedArray: any = [];
  const newArray = checkedArray.of(chekced);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setChecked(e.target.value);
  };

  const onClickCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <AnswerList>
      {ANSWER_DB.map(({ id, name }) => (
        <AnswerLabel key={id}>
          <Answers
            type="radio"
            value={name}
            onClick={onClickCheck}
            checked={chekced === name}
            onChange={e => handleChange(e)}
          />
          {name}
        </AnswerLabel>
      ))}
    </AnswerList>
  );
};

const AnswerList = styled.li`
  ${props => props.theme.flex.flexBox('row', '', 'center')};
  margin-top: 10px;
`;

const AnswerLabel = styled.label`
  ${props => props.theme.flex.flexBox('column', '', '')};
  margin: 0 20px;
  font-size: 15px;
  text-align: center;
`;

const Answers = styled.input`
  margin-top: 10px;
`;

export default Answer;
