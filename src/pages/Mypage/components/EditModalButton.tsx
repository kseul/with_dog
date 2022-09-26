import styled from 'styled-components';

const EditModalButton = ({ title, backgroundColor, func, isActive }) => {
  return (
    <EditModalButtonWrapper
      backgroundColor={backgroundColor}
      onClick={func}
      disabled={!isActive}
      type="button"
    >
      {title}
    </EditModalButtonWrapper>
  );
};

const EditModalButtonWrapper = styled.button<{
  backgroundColor: string;
}>`
  display: block;
  width: 9.375rem;
  height: 1.875rem;
  border-radius: 0.875rem;
  border: none;
  background-color: ${props => props.backgroundColor};
  font-size: 1rem;
  color: white;
  opacity: ${props => (props.disabled ? 0.6 : 1)};
`;

export default EditModalButton;
