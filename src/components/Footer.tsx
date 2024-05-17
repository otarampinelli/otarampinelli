import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyle>
      <p>@otarampinelli</p>
    </FooterStyle>
  );
};

const FooterStyle = styled.footer`
  background: #2c2c2c;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Footer;
