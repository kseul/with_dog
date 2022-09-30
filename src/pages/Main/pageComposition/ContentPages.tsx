import React from 'react';
import styled from 'styled-components';

interface ContentPageProps {
  title: string;
  subTitle: string;
  backGroundImage: string;
  reverse: boolean;
  id: number;
}

const ContentPages = React.forwardRef<HTMLDivElement, ContentPageProps>(
  ({ title, subTitle, backGroundImage, reverse }, ref) => {
    return (
      <ContentPagesContainer
        style={{ backgroundImage: `url(${backGroundImage})` }}
        ref={ref}
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
  }
);

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
