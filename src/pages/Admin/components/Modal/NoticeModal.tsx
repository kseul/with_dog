import styled from 'styled-components';
import axios from 'axios';
import NoticeDetailModal from 'pages/Admin/components/Modal/NoticeDetailModal';
import NoticeBox from 'pages/Admin/components/Notice/NoticeBox';
import backgroundImage from 'assets/images/bg1.jpg';

const NoticeModal = ({
  data,
  onCurrentModal,
  modalId,
  noticeDetailModal,
  isNoticeDetailModal,
}) => {
  const newArr = [...data.post_reports, ...data.comment_reports];

  const clickAndRead = () => {
    axios
      .post(
        `https://togedog-dj.herokuapp.com/admin/notices/all`,
        {},
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      )
      .then(res => console.log(res))
      .catch(error => console.log(error));
  };

  return (
    <NoticeModalContainer>
      {data && (
        <NoticeList>
          {newArr.map(data => (
            <NoticeBox
              key={data.id}
              data={data}
              onCurrentModal={onCurrentModal}
              noticeDetailModal={noticeDetailModal}
              clickAndRead={clickAndRead}
            />
          ))}
          {isNoticeDetailModal && (
            <NoticeDetailModal
              noticeDetailModal={noticeDetailModal}
              modalId={modalId}
            />
          )}
        </NoticeList>
      )}
    </NoticeModalContainer>
  );
};

const NoticeModalContainer = styled.div`
  position: absolute;
  top: 1.875rem;
  right: 0;
  width: 15rem;
  height: 10rem;
  border: 0.2px solid gray;
  border-radius: 3px;
  background: url(${backgroundImage}) 0 0 no-repeat;
  background-size: cover;
  overflow-y: scroll;
`;

const NoticeList = styled.div`
  margin: 1.25rem auto;
  width: 90%;
  height: 80%;
`;

export default NoticeModal;
