import styled from 'styled-components';

const NoticeBox = ({ data }) => {
  return (
    <NoticeBoxWrapper>{data.post_subject}이 신고 되었습니다.</NoticeBoxWrapper>
  );
};

const NoticeBoxWrapper = styled.div`
  ${props => props.theme.flex.flexBox('', 'center', '')}
  margin-bottom: -1px;
  margin-top: 10px;
  width: 100%;
  height: 3rem;
  background-color: rgb(154, 154, 154, 0.3);
  border: 0.1px solid rgb(154, 154, 154, 0.3);
  border-radius: 3px;
  font-size: 0.7rem;
`;

export default NoticeBox;
