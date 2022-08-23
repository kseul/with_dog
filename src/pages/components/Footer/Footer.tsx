import styled from 'styled-components';
import logo from 'assets/svg/with-dog-logo.svg';

const Footer = () => {
  return (
    <FooterContainer>
      <ContentSection>
        <Logo src={logo} />
        <TextContainer>
          <TextTop>
            <RightText>함께하개</RightText>
            <LeftText>Team 함께하개</LeftText>
          </TextTop>
          <TextBottom>반려견에게 다가가는 순간, 우리 함께하개</TextBottom>
        </TextContainer>
      </ContentSection>
      <CopyRightContainer>
        <CopyRightText>
          CopyRight © 2022 WithDog All rights reserved.
        </CopyRightText>
      </CopyRightContainer>
    </FooterContainer>
  );
};
const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 16rem;
  background-color: ${props => props.theme.colors.lineLightGray};
`;
const ContentSection = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  height: 5.625rem;
`;
const TextContainer = styled.div`
  margin-left: 1.25rem;
`;
const TextTop = styled.div`
  display: flex;
`;
const RightText = styled.div`
  font-size: 2.6rem;
  font-weight: 600;
`;
const LeftText = styled.div`
  width: 7.75rem;
  height: 2.313rem;
  margin-left: 1.25rem;
  padding-top: 1.25rem;
  border-bottom: 0.094rem solid #aeb5bc;
  font-size: 0.8rem;
  color: ${props => props.theme.colors.gray};
  text-align: end;
`;
const TextBottom = styled.div`
  margin-top: 0.6rem;
  font-size: 1.125rem;
  color: ${props => props.theme.colors.gray};
`;
const CopyRightContainer = styled.div`
  position: absolute;
  bottom: 7%;
  right: 2%;
`;
const CopyRightText = styled.div`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.gray};
`;
export default Footer;
