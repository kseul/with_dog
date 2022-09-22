import styled from 'styled-components/macro';
import EnergyAnswer from './EnergyAnswer';
import MBTIButton from '../MBTIButton';
import { ENERGY_TEST_DB } from '../constants/Test';
import { MBTIEnergyProps } from 'types/type';

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
            <TestListText>{testList}</TestListText>
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
  list-style: none;
  width: 50rem;
  margin: 0 auto;
`;

const TestListText = styled.span`
  ${props => props.theme.flex.flexBox('column', 'center', 'center')};
  margin-bottom: 1rem;
  text-align: center;
`;

const Questions = styled.li`
  margin: 3.7rem 0;
  font-size: 1.2rem;
  font-weight: 350;
  color: #191919;
  text-align: center;
  border-bottom: 1px solid #bfbfbf;
`;

export default EnergyTest;
