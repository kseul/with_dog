import styled from 'styled-components';
import cameraImg from 'assets/svg/camera.svg';

const UserImgSection = ({ changeUserImage, thumbnail_url }) => {
  return (
    <UserImgContainer>
      <UserImg src={thumbnail_url} />
      <EditImgContainer>
        <FileInput
          type="file"
          accept=".jpg, .jepg, .jfif, .png, .webp, .avif, .svg"
          id="imgFile"
          onChange={changeUserImage}
        />
        <FileInputLabel htmlFor="imgFile">
          <EditImg src={cameraImg} />
        </FileInputLabel>
      </EditImgContainer>
    </UserImgContainer>
  );
};

const UserImgContainer = styled.div`
  position: relative;
  margin: 1.675rem 0;
`;

const UserImg = styled.img`
  border-radius: 70%;
  width: 14rem;
  height: 14rem;
`;

const EditImgContainer = styled.div`
  position: absolute;
  top: 68%;
  right: -6%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  background-color: white;
  border-radius: 70%;
  box-shadow: 1px 1px 15px 2px rgba(0, 0, 0, 0.1);
`;

const FileInput = styled.input`
  display: none;
`;

const FileInputLabel = styled.label`
  cursor: pointer;
`;

const EditImg = styled.img`
  height: 2.4rem;
`;

export default UserImgSection;
