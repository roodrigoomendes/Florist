import Logo from '../assets/image//logo.png'
import styled from "styled-components"

export default function Navbar(){
  return(
    <BoxNav>
      <img src={Logo} alt="Lush" />
      <OptionNav>
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Planters</a>
        <a href="">Contact</a>
        <Btn>Call Us</Btn>
      </OptionNav>
    </BoxNav>
  )
}

const BoxNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  padding: 37px 110px 0;

  `
const OptionNav = styled.div`
  display: flex;
  gap: 51px;
  font-weight: 500;
  display: flex;
  align-items: center;
  
  a:hover{
    text-decoration: underline;
  }
  
  `

export const Btn = styled.button`
padding: 11px 50px;
font-weight: 700;
border: 1px solid #FFFFFF;
border-radius: 3px;
color: #FFFFFF;
margin-left: 12px;
background: transparent;
display: flex;
align-items: center;
justify-content: center;
`