import styled from 'styled-components';
import ConfirmText from '../ConfirmText';
import USER_LOCATION from 'pages/Login/DATA/USERLOCATION_DATA';

const UserDataInputForm = ({
  USER_INPUT_FORM,
  handleUserInput,
  checkUniqueEmail,
  handleUserLocation,
}) => {
  return (
    <UserDataInputContainer>
      {USER_INPUT_FORM.map(
        ({ id, placeholder, type, name, errorMessage, validCheck }) => {
          return (
            <UserDataInputWrapper key={id}>
              <UserDataInput
                placeholder={placeholder}
                type={type}
                name={name}
                onChange={handleUserInput}
              />
              {!validCheck && <ConfirmText errorMessage={errorMessage} />}
            </UserDataInputWrapper>
          );
        }
      )}
      <UniqueEmailButton>
        {checkUniqueEmail ? (
          <PassText>확인 완료</PassText>
        ) : (
          <RequestText>중복 확인중</RequestText>
        )}
      </UniqueEmailButton>
      <UserLocationContainer>
        <ChooseText>지역을 선택해주세요 👉 </ChooseText>
        <UserLocation onChange={handleUserLocation}>
          {USER_LOCATION.map(({ id, location }) => {
            return (
              <Location key={id} value={location} defaultValue="서울특별시">
                {location}
              </Location>
            );
          })}
        </UserLocation>
      </UserLocationContainer>
    </UserDataInputContainer>
  );
};

const UserDataInputContainer = styled.div`
  position: relative;
  margin-bottom: 2.5rem;
`;

const UserDataInputWrapper = styled.div``;

const UserDataInput = styled.input`
  width: 18rem;
  padding-left: 0;
  padding-bottom: 0.3rem;
  margin-bottom: 2.7rem;
  border: none;
  border-bottom: 1px solid lightgray;
  font-size: 0.9rem;
`;

const UniqueEmailButton = styled.button`
  position: absolute;
  top: 19%;
  right: 0;
  width: 4rem;
  height: 1.25rem;
  border: 1px solid gray;
  border-radius: 1.875rem;
  background-color: white;
  font-size: 0.7rem;
  font-weight: 600;
`;

const PassText = styled.div`
  color: green;
`;

const RequestText = styled.div`
  color: red;
  font-size: 0.6rem;
  opacity: 0.6;
`;

const UserLocationContainer = styled.div`
  display: flex;
  position: relative;
`;

const ChooseText = styled.div`
  flex: 7;
  font-size: 14.5px;
  font-weight: 600;
`;

const UserLocation = styled.select`
  position: absolute;
  top: -25%;
  right: 0%;
  width: 6.25rem;
  border-radius: 0.3rem;
  border-color: darkgray;
`;

const Location = styled.option``;

export default UserDataInputForm;
