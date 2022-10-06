import styled from 'styled-components';
import { useState } from 'react';
import { NoticeBoxDataTypes } from 'pages/Admin/type';

interface NoticeBoxProps {
  data: NoticeBoxDataTypes;
  onCurrentModal: (id: number) => void;
  noticeDetailModal: () => void;
  onReadId: (id: number) => void;
  allSelected: boolean;
}

const NoticeBox = ({
  data,
  onCurrentModal,
  noticeDetailModal,
  onReadId,
  allSelected,
}: NoticeBoxProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <NoticeBoxWrapper
      className={isClicked === true || allSelected === true ? 'selected' : ''}
      onClick={() => {
        noticeDetailModal();
        onCurrentModal(data.post_id);
        onReadId(data.id);
        setIsClicked(true);
      }}
    >
      {data?.content}이(가) 신고 되었습니다.
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
  background-color: rgb(85, 85, 85, 0.5);
  border: 0.1px solid rgb(154, 154, 154, 0.3);
  border-radius: 3px;
  font-size: 0.7rem;
  cursor: pointer;

  &.selected {
    background-color: rgb(179, 179, 179, 0.2);
  }

  :hover {
    background-color: rgb(179, 179, 179, 0.2);
  }
`;

export default NoticeBox;
