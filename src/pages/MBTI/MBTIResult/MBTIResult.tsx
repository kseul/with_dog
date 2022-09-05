import styled from 'styled-components';
import ResultBackground from '../../../../src/assets/images/MBTIResult.jpg';
import MBTIResultInfo from './MBTIResultInfo';

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
  height: 3265px;
  margin: 0 auto;
  background-image: url(${ResultBackground});
`;

const MBTIResultBox = styled.div`
  ${props => props.theme.flex.flexBox('column', 'center', 'center')};
  width: 75rem;
  height: 100%;
  /* margin: 1.875rem, auto; */
  margin: 8rem 0 3rem 0;
  background-color: white;
  border-radius: 1.25rem;
`;

export default MBTIResult;
