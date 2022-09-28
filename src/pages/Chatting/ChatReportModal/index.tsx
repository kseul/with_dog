import { useEffect, useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import styled from 'styled-components';
import { BASE_URL } from 'config';

const ChatReportModal = ({ setIsShowModal }) => {
  const [validReport, setValidReport] = useState(false);
  const [reportInput, setReportInput] = useState('');
  const [reportModalSubmit, setReportModalSubmit] = useState(false);
  const [reportAlert, setReportAlert] = useState('');

  const [cookies] = useCookies(['userToken']);

  const storeData = useSelector((state: RootState) => state);
  const { id, messageId, text } = storeData.chatReport;

  const handleReportInput = e => {
    const { value } = e.target;

    if (value.length > 0 && value.length <= 15) {
      setValidReport(true);
      setReportInput(value);
    } else {
      setValidReport(false);
    }
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  const handleReportSubmit = async () => {
    try {
      await axios.post(
        BASE_URL,
        {
          reported_user_id: id,
          message_id: messageId,
          message_text: text,
          content: reportInput,
        },
        { headers: { Authorization: `Bearer ${cookies.userToken}` } }
      );
      setReportAlert('신고가 완료 되었습니다.');
    } catch (error) {
      setReportAlert('신고하기에 실패 하였습니다.');
    }
  };

  useEffect(() => {
    if (reportModalSubmit === true) {
      setTimeout(closeModal, 2000);
      handleReportSubmit();
    }
  }, [reportModalSubmit]);

  const submitReportInput = e => {
    const checkKey = e.key === 'Enter' && e.nativeEvent.isComposing === false;
    if (checkKey && validReport) {
      setReportModalSubmit(true);
    } else if (checkKey && !validReport) {
      e.preventDefault();
    } else {
      return;
    }
  };

  return (
    <>
      <ChatReportModalContainer>
        {reportModalSubmit ? (
          <Title>{reportAlert}</Title>
        ) : (
          <>
            <Title>신고 이유를 입력하세요.</Title>
            <EditReportInput
              placeholder="신고 이유는 15자 이내로 입력해주세요."
              type="text"
              onChange={handleReportInput}
              onKeyDown={submitReportInput}
            />
            <ButtonContainer>
              <CancelButton onClick={closeModal} type="button">
                취소
              </CancelButton>
              <ConfirmButton
                type="button"
                disabled={!validReport}
                onClick={() => {
                  setReportModalSubmit(true);
                }}
              >
                확인
              </ConfirmButton>
            </ButtonContainer>
          </>
        )}
      </ChatReportModalContainer>
      <BackGround onClick={closeModal} />
    </>
  );
};

const ChatReportModalContainer = styled.form`
  ${props => props.theme.flex.flexBox('column')}
  position: fixed;
  top: 50%;
  width: 33rem;
  height: 13rem;
  transform: translateY(-50%);
  background-color: white;
  border-radius: 1.25rem;
  z-index: 2;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
`;

const EditReportInput = styled.input`
  margin-top: 2rem;
  padding-left: 0;
  padding-top: 0.9rem;
  width: 20rem;
  height: 2.813rem;
  border: none;
  border-bottom: 1px solid gray;
  font-size: 1rem;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding-top: 1.8rem;
`;

const ConfirmButton = styled.button`
  display: block;
  width: 9.375rem;
  height: 1.875rem;
  border-radius: 0.875rem;
  border: none;
  background-color: ${props => props.theme.colors.mint};
  font-size: 1rem;
  color: white;
  opacity: ${props => (props.disabled ? 0.6 : 1)};
`;

const CancelButton = styled.button`
  display: block;
  width: 9.375rem;
  height: 1.875rem;
  border-radius: 0.875rem;
  border: none;
  background-color: ${props => props.theme.colors.purple};
  font-size: 1rem;
  color: white;
`;

const BackGround = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export default ChatReportModal;
