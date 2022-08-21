import styled from 'styled-components';
import logo from 'assets/svg/with-dog-logo.svg';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterHeader>
        함께하개
        <Logo src={logo} />
      </FooterHeader>
      <FooterBody>
        <FooterBodyTitle> Contact To Us</FooterBodyTitle>
        <FooterBodyContact> 📨 asjj8051@gmail.com</FooterBodyContact>
        <FooterBodyContact> 📞 010-5423-8051</FooterBodyContact>
      </FooterBody>
      <FooterSection>
        <FooterCopyRight>
          CopyRight ⓒ WithDog.All rights reserved
        </FooterCopyRight>
      </FooterSection>
    </FooterContainer>
  );
};
const FooterContainer = styled.div`
  height: 300px;
  padding: 40px 50px;
  background-color: ${props => props.theme.colors.purple};
  text-align: center;
`;
const FooterHeader = styled.div`
  position: relative;
  font-size: 27px;
`;
const Logo = styled.img`
  position: absolute;
  top: -30%;
  left: 52.9%;
  width: 50px;
`;
const FooterBody = styled.div`
  margin-top: 40px;
`;
const FooterBodyTitle = styled.div`
  font-size: 24px;
`;
const FooterBodyContact = styled.div`
  font-size: 17px;
  margin-top: 30px;
`;
const FooterSection = styled.div`
  margin-top: 50px;
`;
const FooterCopyRight = styled.div``;
export default Footer;
