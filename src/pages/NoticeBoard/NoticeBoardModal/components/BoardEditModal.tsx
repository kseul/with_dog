import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface editModalProps {
  handleEditModal?: () => void;
}

const BoardEditModal = ({ handleEditModal }: editModalProps) => {
  const navigate = useNavigate();
  const boardData = useSelector((state: any) => state.board.boardData);

  const handleEdit = () => {
    navigate('/noticeBoard/modify');
  };

  const handleDelete = async () => {
    const formData = new FormData();
    formData.append('delete_reason', 'test');

    await fetch(
      `https://togedog-dj.herokuapp.com/posts/${boardData.id}/delete/`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjo5LCJ1c2VyX3R5cGUiOiJhZG1pbiIsImV4cCI6MTY2NDY4NTQ5MiwiaWF0IjoxNjYyMDkzNDkyfQ.AQAciBT2VhdUDY-rQuoRiJCXE3BfIQJd95KgCXk0eKU`,
        },
        body: formData,
      }
    );
    return window.location.reload();
  };

  const EDITMODAL_LIST = [
    { id: 1, page: '수정하기', handle: handleEdit },
    { id: 2, page: '삭제하기', handle: handleDelete },
  ];

  return (
    <EditModalContainer onClick={handleEditModal}>
      <EditModal
        onClick={e => {
          e.stopPropagation();
        }}
      >
        {EDITMODAL_LIST.map(({ id, page, handle }) => {
          return (
            <Edit key={id} onClick={handle}>
              {page}
            </Edit>
          );
        })}
      </EditModal>
    </EditModalContainer>
  );
};

const EditModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
  cursor: default;
`;

const EditModal = styled.div`
  ${props => props.theme.flex.flexBox('column', 'center', 'start')}
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 15vw;
  height: 15vh;
  z-index: 999;
  background-color: white;
  border-radius: 1rem;
`;

const Edit = styled.div`
  flex: 1;
  ${props => props.theme.flex.flexBox('column', 'center', 'center')}
  width: 100%;
  border-bottom: 0.063rem solid ${props => props.theme.colors.lineLightGray};

  &:hover {
    font-weight: 600;
    cursor: pointer;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export default BoardEditModal;
