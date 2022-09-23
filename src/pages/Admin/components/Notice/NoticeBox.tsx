import styled from 'styled-components';

const NoticeBox = ({
  data,
  onCurrentModal,
  noticeDetailModal,
  clickAndRead,
}) => {
  return (
    <NoticeBoxWrapper
      onClick={() => {
        noticeDetailModal();
        onCurrentModal(data.post);
        clickAndRead();
      }}
    >
      {data.content}이(가) 신고 되었습니다.
    </NoticeBoxWrapper>
  );
};

const NoticeBoxWrapper = styled.div`
  ${props => props.theme.flex.flexBox('', 'center', '')}
  margin-bottom: -1px;
  margin-top: 10px;
  padding-left: 0.5rem;
  width: 100%;
  height: 3rem;
  background-color: rgb(154, 154, 154, 0.3);
  border: 0.1px solid rgb(154, 154, 154, 0.3);
  border-radius: 3px;
  font-size: 0.7rem;
  cursor: pointer;

  :hover {
    background-color: rgb(179, 179, 179, 0.2);
  }
`;

export default NoticeBox;
