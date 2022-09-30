import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CommentDots from './CommentDots';

interface commentTextProps {
  id: number;
  user_id: number;
  nickName: string;
  content: string;
}

const CommentText = ({ id, user_id, nickName, content }: commentTextProps) => {
  const loginId = useSelector((state: any) => state.user.userData.id);

  const [showDots, setShowDots] = useState(false);

  return (
    <CommentTextWrapper
      onMouseEnter={() => setShowDots(true)}
      onMouseLeave={() => setShowDots(false)}
    >
      <CommentWriter>
        {nickName}
        {showDots && (
          <CommentDots
            id={id}
            userId={user_id}
            loginId={loginId}
            content={content}
          />
        )}
      </CommentWriter>
      <CommentContent dangerouslySetInnerHTML={{ __html: content }} />
    </CommentTextWrapper>
  );
};

const CommentTextWrapper = styled.div`
  ${props => props.theme.flex.flexBox('column', '')};
  width: 85%;
  font-size: 0.9rem;
`;

const CommentWriter = styled.span`
  margin-bottom: 0.4rem;
  font-weight: bold;
`;

const CommentContent = styled.span`
  line-height: 1.2rem;
`;

export default CommentText;
