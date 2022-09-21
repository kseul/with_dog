import styled from 'styled-components';
import NoticeBox from 'pages/Admin/components/Notice/NoticeBox';
import backgroundImage from 'assets/images/bg1.jpg';

const NoticeModal = ({ data }) => {
  return (
    <NoticeModalContainer>
      {data && (
        <NoticeList>
          {data.post_reports.map(data => (
            <NoticeBox key={data.id} data={data} />
          ))}
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
