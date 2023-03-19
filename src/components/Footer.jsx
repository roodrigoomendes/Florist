import styled from "styled-components"
import Background from "../assets/image/Footer.png"
import Instagram from "../assets/icone/Instagram.svg"
import Facebook from "../assets/icone/Facebook.svg"
import Twitter from "../assets/icone/Twitter.svg"

export default function Footer(){
  return(
    <>
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
      <Author>
        <h3>
        Feito Por Rodrigo Mendes ❤️💻  
        </h3>
      </Author>
    </>
  )
}

const BoxFooter = styled.footer`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
height: 200px;
background-image: url(${Background});
background-size: cover;
background-position: center;
color: #ffffff;
padding: 50px;

h1{
  font-weight: 900;
  font-size: 28px;
  text-align: center;
}
`

const FooterLinks = styled.div`
display: flex;
gap: 72px;
margin: 30px 0;
`

const Author = styled.div`
text-align: center;
color: #ffffff;
background-color: #000000;

h3{
  font-weight: 300;
}
`