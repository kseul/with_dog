import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import styled from 'styled-components/macro';
import { BASE_URL } from 'config';
import { SendMBTI } from './type';

const MBTIResultButton = ({ onCheck }) => {
  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      onCheck();
    }
  };
  const sendMbti = new FormData();
  const [cookies] = useCookies(['userToken']);
  const mbtiResultText: SendMBTI = useSelector(
    (state: RootState) => state.mbtiText
  );
  const getMBTIResult: string = Object.values(mbtiResultText).toString();
  sendMbti.append('mbti', getMBTIResult);
  const getUserId = useSelector((state: RootState) => state.user.userData.id);
  const sendMBTI = () => {
    if (cookies.userToken && true) {
      axios.patch(`${BASE_URL}/users/${getUserId}`, sendMbti, {
        headers: {
          Authorization: `Bearer ${cookies.userToken}`,
        },
      });
    }
  };

  return (
    <MBTIResultButtonContainer>
      <KeyEvent onKeyPress={handleKeyPress} autoFocus />
      <ResultButton
        onClick={() => {
          onCheck();
          sendMBTI();
        }}
      >
        결과 보러 가기
      </ResultButton>
    </MBTIResultButtonContainer>
  );
};
const MBTIResultButtonContainer = styled.div`
  margin: 0 0 0.625rem 0;
`;

const KeyEvent = styled.input`
  margin-top: -30%;
  border: none;
  color: transparent;
  text-shadow: 0 0 0 black;
`;

const ResultButton = styled.button`
  width: 9.375rem;
  height: 2.5rem;
  margin-bottom: 0.625rem;
  background-color: #edeef0;
  &:hover {
    cursor: pointer;
    background-color: #c3c8f3;
  }
  border: none;
  border-radius: 1.875rem;
  font-size: 0.938rem;
  font-weight: 500;
`;
export default MBTIResultButton;
