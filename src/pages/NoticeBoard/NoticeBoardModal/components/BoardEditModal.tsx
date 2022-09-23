import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface editModalProps {
  handleEditModal?: () => void;
}

const BoardEditModal = ({ handleEditModal }: editModalProps) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate('/noticeBoard/modify');
  };

  return (
    <EditModalContainer onClick={handleEditModal}>
      <EditModal
        onClick={e => {
          e.stopPropagation();
        }}
      >
        {EDITMODAL_LIST.map(({ id, page }) => {
          return (
            <Edit key={id} onClick={handleEdit}>
              {page}
            </Edit>
          );
        })}
      </EditModal>
    </EditModalContainer>
  );
};

const EDITMODAL_LIST = [{ id: 1, page: '수정하기' }];

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
