import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import AdminSpinner from 'pages/Admin/components/AdminSpinner';
import NoticeDetailModal from 'pages/Admin/components/Modal/NoticeModal/components/NoticeDetailModal';
import NoticeBox from 'pages/Admin/components/Modal/NoticeModal/components/NoticeBox';
import API from 'config';

const NoticeModal = ({
  data,
  onCurrentModal,
  modalId,
  noticeDetailModal,
  isNoticeDetailModal,
  getClassName,
}) => {
  const [readId, setReadId] = useState<number>();
  const [loading, setLoading] = useState<Boolean>(false);
  const [allSelected, setAllSelected] = useState<Boolean>(false);

  const onReadId = (id: number): void => {
    setReadId(id);
  };

  const clickAndRead = () => {
    axios
      .post(
        `${API.ADMINNOTICE}?id=${readId}&type=${getClassName}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        }
      )
      .then(res => res)
      .catch(error => error);
  };

  const readAllNotice = async () => {
    try {
      setLoading(true);
      await axios.post(
        `${API.ADMINNOTICE}?id=all&type=${getClassName}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        }
      );
    } finally {
      setLoading(false);
      setAllSelected(true);
    }
  };

  useEffect(() => {
    if (readId !== undefined) {
      clickAndRead();
    }
  }, [readId]);

  return (
    <NoticeModalContainer>
      <NoticeTop>
        <ReadAllBtn onClick={readAllNotice}>전체 읽음</ReadAllBtn>
      </NoticeTop>
      {loading ? (
        <AdminSpinner />
      ) : (
        data && (
          <NoticeList>
            {data.map(data => (
              <NoticeBox
                key={data.id}
                data={data}
                onCurrentModal={onCurrentModal}
                noticeDetailModal={noticeDetailModal}
                onReadId={onReadId}
                allSelected={allSelected}
              />
            ))}
            {isNoticeDetailModal && (
              <NoticeDetailModal
                noticeDetailModal={noticeDetailModal}
                modalId={modalId}
              />
            )}
          </NoticeList>
        )
      )}
    </NoticeModalContainer>
  );
};

const NoticeModalContainer = styled.div`
  ${props => props.theme.flex.flexBox('column', '', '')}
  position: absolute;
  top: 1.875rem;
  right: 0;
  width: 25rem;
  height: 20rem;
  border: 0.2px solid gray;
  border-radius: 3px;
  background: white;
  overflow-y: scroll;
  z-index: 10;
`;

const NoticeTop = styled.div`
  ${props => props.theme.flex.flexBox('row-reverse', 'center', '')}
  width : 100%;
  height: 6%;
  color: gray;
  border-bottom: 1px solid gray;
`;

const ReadAllBtn = styled.div`
  padding-top: 0.25rem;
  width: 15%;
  height: 100%;
  text-align: center;
  font-size: 0.8rem;
  cursor: pointer;

  :hover {
    color: ${props => props.theme.colors.selectMint};
  }
`;

const NoticeList = styled.div`
  margin: 1.25rem auto;
  width: 90%;
  height: 80%;
`;

export default NoticeModal;
