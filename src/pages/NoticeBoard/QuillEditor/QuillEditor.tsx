import React, { useMemo, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const QuillEditor = () => {
  const [contents, setContents] = useState('');

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
    <ReactQuill
      theme="snow"
      value={contents}
      onChange={setContents}
      modules={modules}
      formats={formats}
      placeholder="내용을 입력해 주세요."
    />
  );
};

export default QuillEditor;
