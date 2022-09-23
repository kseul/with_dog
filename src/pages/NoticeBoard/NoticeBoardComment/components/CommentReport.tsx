import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import dots from 'assets/svg/dots.svg';

interface commentReportProps {
  id: number;
}

const CommentReport = ({ id }: commentReportProps) => {
  const boardData = useSelector((state: RootState) => state.board.boardData);

  const handleCommentReport = async () => {
    const formData = new FormData();
    formData.append('content', '임시');

    await fetch(
      `https://togedog-dj.herokuapp.com/posts/${boardData.id}/comments/${id}/report/`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoyMywidXNlcl90eXBlIjoibm9ybWFsIiwiZXhwIjoxNjY0Njg1NDQ1LCJpYXQiOjE2NjIwOTM0NDV9.Vew7ZXyxZWOiSjoBLyZSwtTDaMK3sHzNZyjXlHyUbGE`,
        },
        body: formData,
      }
    );
  };

  return <CommentReportElement src={dots} onClick={handleCommentReport} />;
};

const CommentReportElement = styled.img`
  width: 0.8rem;
  height: 0.8rem;
  margin-left: 0.3rem;
`;

export default CommentReport;
