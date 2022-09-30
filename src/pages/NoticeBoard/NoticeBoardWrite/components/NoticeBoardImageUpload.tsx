import React, { useState } from 'react';
import styled from 'styled-components';

interface NoticeBoardImageUploadProps {
  filePath?: string;
  imageUploadHandler?: (e) => void | undefined;
}

const NoticeBoardImageUpload = ({
  filePath,
  imageUploadHandler,
}: NoticeBoardImageUploadProps) => {
  return (
    <ImageInputBox>
      <ImagePathInput>{filePath}</ImagePathInput>
      <ImageInputLabel htmlFor="imageUpload">업로드</ImageInputLabel>
      <ImageInput
        id="imageUpload"
        type="file"
        accept=".jpg, .jpeg, .jfif, .png, .webp, .avif, .svg"
        onChange={imageUploadHandler}
      />
    </ImageInputBox>
  );
};

const ImageInputBox = styled.div`
  display: flex;
  margin-top: 3rem;
`;

const ImagePathInput = styled.div`
  display: flex;
  align-items: center;
  height: 2.5rem;
  border: 0.063rem solid black;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-right: 0.5rem;
`;

const ImageInputLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 2.5rem;
  border: 0.063rem solid black;
  border-radius: 0.5rem;
  color: black;
`;

const ImageInput = styled.input`
  display: none;
`;

export default NoticeBoardImageUpload;
