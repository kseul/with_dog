import styled from 'styled-components';

const TextEditModal = () => {
  return <TextEditModalContainer>hello</TextEditModalContainer>;
};

const TextEditModalContainer = styled.div`
  ${props => props.theme.flex.flexBox('column')}
  position: absolute;
  /* top: 0%; */
  width: 100px;
  height: 100px;
  background-color: red;
  text-align: center;
  z-index: 2;
`;

export default TextEditModal;
