import styled from "styled-components"
import Background from "../assets/image/Footer.png"
import Instagram from "../assets/icone/Instagram.svg"
import Facebook from "../assets/icone/Facebook.svg"
import Twitter from "../assets/icone/Twitter.svg"

export default function Footer(){
  return(
    <BoxFooter>
      <h1>Feel free to contact us</h1>
      <FooterLinks>
      <a href="">
          <img src={Instagram} alt="Instagram" />
        </a>
        <a href="">
          <img src={Facebook} alt="Facebook" />
        </a>
        <a href="">
          <img src={Twitter} alt="Twitter" />
        </a>
      </FooterLinks>
    </BoxFooter>
  )
}

const BoxFooter = styled.footer`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
height: 374px;
background-image: url(${Background});
color: #ffffff;
padding: 75px;

h1{
  font-weight: 900;
  font-size: 32px;
}
`

const FooterLinks = styled.div`
display: flex;
gap: 72px;
margin: 75px 0;
`