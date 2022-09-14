import styled from 'styled-components/macro';
import MBTIResultInfo from './MBTIResultInfo';
import ResultBackground from '../../../../src/assets/images/MBTIResult.jpg';

const MBTIResult = () => {
  return (
    <MBTIResultContainer>
      <MBTIResultBox>
        <MBTIResultInfo />
      </MBTIResultBox>
    </MBTIResultContainer>
  );
};

const MBTIResultContainer = styled.div`
  ${props => props.theme.flex.flexBox('column', 'center', 'center')};
  width: 100vw;
  height: 206.25rem;
  background-image: url(${ResultBackground});
  background-size: cover;
`;

const MBTIResultBox = styled.div`
  ${props => props.theme.flex.flexBox('column', 'center', 'center')};
  width: 87.5rem;
  height: 100%;
  margin: 8rem 0 3rem 0;
  background-color: white;
  border-radius: 1.25rem;
`;

export default MBTIResult;
