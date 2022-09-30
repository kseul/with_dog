import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import ReactQuill from 'react-quill';
import styled from 'styled-components';
import NoticeBoardImageUpload from './components/NoticeBoardImageUpload';
import API from 'config';

const NoticeBoardModify = () => {
  const boardData = useSelector((state: any) => state.board.boardData);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState('');
  const [filePath, setFilePath] = useState('파일 선택');
  const [cookies] = useCookies(['userToken']);
  const navigate = useNavigate();

  const getBoardData = async () => {
    const response = await fetch(`${API.BOARDDETAIL}${boardData.id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${cookies.userToken}`,
      },
    });

    const data = await response.json();
    setTitle(data.subject);
    setContent(data.content);
    setFile(data.image_url);
  };

  const onChangeTitle = e => {
    setTitle(e.target.value);
  };

  const FILE_SIZE_LIMIT = 50 * 1024 * 1024;

  const imageUploadHandler = e => {
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
    setFilePath(e.target.value);
  };

  const modifyHandler = () => {
    const formData = new FormData();
    formData.append('subject', title);
    formData.append('content', content);
    formData.append('file', file);

    fetch(`${API.BOARDDETAIL}${boardData.id}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${cookies.userToken}`,
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

  useEffect(() => {
    getBoardData();
  }, []);

  return (
    <QuillContainer>
      <TitleInput
        placeholder="제목을 입력해 주세요."
        onChange={onChangeTitle}
        value={title}
      />
      <NoticeBoardImageUpload
        filePath={filePath}
        imageUploadHandler={imageUploadHandler}
      />
      <Quill
        theme="snow"
        value={content}
        onChange={setContent}
        modules={modules}
        formats={formats}
        placeholder="내용을 입력해 주세요."
      />
      <SubmitHandler onClick={modifyHandler}>수정하기</SubmitHandler>
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

const SubmitHandler = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.5rem;
  height: 2.5rem;
  border-radius: 1rem;
  margin-top: 3rem;
  background-color: ${props => props.theme.colors.mint};
`;

export default NoticeBoardModify;
