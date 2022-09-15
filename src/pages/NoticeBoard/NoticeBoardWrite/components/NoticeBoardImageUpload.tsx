import React from 'react';
import styled from 'styled-components';

const NoticeBoardImageUpload = ({ imageSizeHandler }) => {
  return (
    <ImageInputBox>
      <ImageInputLabel htmlFor="imageUpload">파일선택</ImageInputLabel>
      <ImageInput
        id="imageUpload"
        type="file"
        accept="image/*"
        onChange={imageSizeHandler}
      />
    </ImageInputBox>
  );
};

const ImageInputBox = styled.div`
  display: flex;
  margin-top: 3rem;
`;

const ImageInputLabel = styled.label`
  width: 5rem;
  color: black;
`;

const ImageInput = styled.input`
  display: none;
`;

export default NoticeBoardImageUpload;
