import styled from 'styled-components';
import { ContentPagesProp } from 'types/type';

const ContentPages = ({
  title,
  subTitle,
  backGroundImage,
  reverse,
  id,
}: ContentPagesProp) => {
  return (
    <ContentPagesContainer
      style={{ backgroundImage: `url(${backGroundImage})` }}
      id={'section' + id}
    >
      {reverse ? (
        <ReverseTextContainer>
          <ReverseTitle>{title}</ReverseTitle>
          <SubTitle>{subTitle}</SubTitle>
        </ReverseTextContainer>
      ) : (
        <TextContainer>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
        </TextContainer>
      )}
    </ContentPagesContainer>
  );
};

const ContentPagesContainer = styled.div`
  height: 100vh;
  background-size: cover;
  scroll-snap-align: center;
  scroll-snap-stop: always;
`;
const TextContainer = styled.div`
  padding-top: 17rem;
  padding-left: 6rem;
`;
const Title = styled.div`
  font-size: 4.7vmin;
  font-weight: 600;
  line-height: 1.4;
  white-space: pre-line;
`;
const SubTitle = styled.div`
  padding-top: 4rem;
  font-size: 3vmin;
  line-height: 1.4;
  white-space: pre-line;
`;
const ReverseTextContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  flex-direction: column;
  padding-top: 17rem;
  padding-right: 6rem;
`;
const ReverseTitle = styled(Title)`
  padding-right: 0.6rem;
`;

export default ContentPages;
