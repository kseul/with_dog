import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import styled from 'styled-components/macro';
import ResultBackground from 'assets/images/MBTIResult.jpg';
import MBTIResultInfoShare from './MBTIResultInfoShare';

const MBTIResultShare = () => {
  const mbtiResultText = useSelector((state: RootState) => state.mbtiText);

  return (
    <MBTIResultContainer>
      <MBTIResultBox>
        <MBTIResultInfoShare mbtiResultText={mbtiResultText} />
      </MBTIResultBox>
    </MBTIResultContainer>
  );
};

const MBTIResultContainer = styled.div`
  ${props => props.theme.flex.flexBox('column', 'center', 'center')};
  width: 100vw;
  height: 220rem;
  background-image: url(${ResultBackground});
  background-size: cover;
`;

const MBTIResultBox = styled.div`
  ${props => props.theme.flex.flexBox('column', 'center', 'center')};
  width: 87.5rem;
  height: 100%;
  margin: 8rem 0 3rem 0;
  padding: 5rem 0;
  background-color: white;
  border-radius: 1.25rem;
`;

export default MBTIResultShare;
