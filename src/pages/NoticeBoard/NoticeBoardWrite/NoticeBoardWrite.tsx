import React, { useMemo, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NoticeBoardImageUpload from './components/NoticeBoardImageUpload';

const QuillEditor = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState('');

  const FILE_SIZE_LIMIT = 50 * 1024 * 1024;

  const imageSizeHandler = e => {
    const target = e.currentTarget;
    const files = target.files[0];

    if (files === undefined) {
      return;
    }

    if (files.size > FILE_SIZE_LIMIT) {
      target.value = '';
      alert('업로드 가능 용량은 50MB 입니다.');
      return;
    }

    setFile(files);
  };

  const writeHandler = () => {
    const formData = new FormData();
    formData.append('subject', title);
    formData.append('content', content);
    formData.append('file', file);

    fetch(`https://togedog-dj.herokuapp.com/posts`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoyMywidXNlcl90eXBlIjoibm9ybWFsIiwiZXhwIjoxNjY0Njg1NDQ1LCJpYXQiOjE2NjIwOTM0NDV9.Vew7ZXyxZWOiSjoBLyZSwtTDaMK3sHzNZyjXlHyUbGE`,
      },
      body: formData,
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'success') {
          navigate('/noticeboard');
        }
      });
  };

  const onChangeTitle = e => {
    setTitle(e.target.value);
  };

  const cancelHandler = () => {
    navigate('/noticeboard');
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ font: [] }],
          [{ size: ['small', false, 'large', 'huge'] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
          ],
          [
            { align: [] },
            // { color: [] },
            // { background: [] }
          ],
          ['image'],
        ],
      },
    }),
    []
  );

  const formats = [
    'font',
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'align',
    // 'color',
    // 'background',
  ];

  return (
    <QuillContainer>
      <TitleInput
        placeholder="제목을 입력해 주세요."
        onChange={onChangeTitle}
        value={title}
      />
      <NoticeBoardImageUpload imageSizeHandler={imageSizeHandler} />
      <Quill
        theme="snow"
        value={content}
        onChange={setContent}
        modules={modules}
        formats={formats}
        placeholder="내용을 입력해 주세요."
      />
      <WriterButton>
        <CancelHandler onClick={cancelHandler}>취소하기</CancelHandler>
        <SubmitHandler onClick={writeHandler}>작성하기</SubmitHandler>
      </WriterButton>
    </QuillContainer>
  );
};

const QuillContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const TitleInput = styled.input`
  width: 80%;
  height: 3rem;
  border: none;
  border-bottom: 0.0625rem solid ${props => props.theme.colors.lightGray};
  margin-top: 5rem;
  font-size: 2rem;
`;

const Quill = styled(ReactQuill)`
  width: 80%;
  margin-top: 3rem;
`;

const WriterButton = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 15%;
`;

const CancelHandler = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 2.5rem;
  border-radius: 1rem;
  margin-top: 3rem;
  background-color: ${props => props.theme.colors.lineLightGray};
  cursor: pointer;
`;

const SubmitHandler = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 2.5rem;
  border-radius: 1rem;
  margin-top: 3rem;
  background-color: ${props => props.theme.colors.mint};
  cursor: pointer;
`;

export default QuillEditor;
