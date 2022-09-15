import styled from 'styled-components';
import SpinnerImg from 'assets/images/Spinner.gif';

const AdminSpinner = () => {
  return (
    <SpinnerContainer>
      <LoadingImage src={SpinnerImg} />
    </SpinnerContainer>
  );
};

const SpinnerContainer = styled.div`
  ${props => props.theme.flex.flexBox('column', 'center', 'center')}
  margin-top : 3rem;
  width: 100%;
  height: 100%;
`;

const LoadingImage = styled.img``;

export default AdminSpinner;
