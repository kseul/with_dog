import styled from 'styled-components/macro';
import { ENERGY_TEST_DB } from '../constants/Test';
import { MBTIEnergyProps } from '../MBTITest';
import EnergyAnswer from './EnergyAnswer';
import MBTIButton from '../MBTIButton';

const EnergyTest = ({
  handleSetEnergyName,
  onClickCheck,
  energyLength,
  onEnergyCheck,
}: MBTIEnergyProps) => {
  return (
    <TestDetailContainer>
      <TestList>
        {ENERGY_TEST_DB.map(({ testId, testList, labelName }) => (
          <Questions key={testId}>
            {testList}
            <EnergyAnswer
              handleSetEnergyName={handleSetEnergyName}
              onClickCheck={onClickCheck}
              labelName={labelName}
              testId={testId}
            />
          </Questions>
        ))}
      </TestList>
      {energyLength === 5 && <MBTIButton onCheck={onEnergyCheck} />}
    </TestDetailContainer>
  );
};

const TestDetailContainer = styled.div`
  ${props => props.theme.flex.flexBox('column', 'center', '')};
  margin: 0 auto;
`;

const TestList = styled.ul`
  ${props => props.theme.flex.flexBox('column', '', '')};
  margin: 0 auto;
  width: 800px;
  list-style: none;
`;

const Questions = styled.li`
  margin: 40px 0;
  font-size: 20px;
  text-align: center;
`;

export default EnergyTest;
