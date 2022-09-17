import styled from 'styled-components';

const AdminInputForm = ({ placeholder, type }) => {
  return <AdminInput placeholder={placeholder} type={type} />;
};
const AdminInput = styled.input`
  width: 22rem;
  height: 1.875rem;
  margin-bottom: 2.5rem;
  padding-left: 0;
  border: none;
  border-bottom: 1px solid darkgray;
  font-size: 1.063rem;
`;
export default AdminInputForm;
