import Logo from '../assets/florest.png'

import styled from "styled-components"

export default function Navbar(){
  return(
    <BoxNav>
      <LogoBox>
        <img src={Logo} alt="" />
        <h1>Florest</h1>
      </LogoBox>
      <OptionNav>
        <Btn>Call Us</Btn>
      </OptionNav>
    </BoxNav>
  )
}

const LogoBox = styled.div`
display: flex;
gap: 5px;
align-items: center;

img{
  width: 1.875rem;
}
`

const BoxNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  padding: 37px 50px 0;

  `
const OptionNav = styled.div`
  display: flex;
  gap: 51px;
  font-weight: 500;
  display: flex;
  align-items: center;  
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