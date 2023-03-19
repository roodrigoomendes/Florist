import styled from "styled-components"
import Background from "../assets/image/ImageContact.png"


export default function Contact(){
  return(
    <BoxContact>
      <p>
      Enter your email address for 
      our mailing Promo or other interesting things
      </p>
      <input placeholder="Enter your email" type="text" name="" id="" />
      <ButtonContact>Submit</ButtonContact>
    </BoxContact>
  )
}
const BoxContact = styled.section`
display: flex;
height: 144px;
width: 100%;
background-image: url(${Background});
padding: 128px 100px;
color: #ffffff;
align-items: center;
justify-content: space-around;
margin-bottom: 120px;

p{
  font-weight: 700;
  font-size: 2rem;
  width: 570px;

}

> input[type=text]{
  background: rgba(217, 217, 217, 0.03);
  border: 1px solid #FFFFFF;
  backdrop-filter: blur(2.5px);
  padding: 20px 25px;
  font-weight: 500;
  font-size: 1rem;
  width: 475px;
}

`

const ButtonContact = styled.button`
display: flex;
font-weight: 700;
font-size: 1rem;
color: #ffffff;
background: #285A43;
width: 145px;
height: 48px;
align-items: center;
justify-content: center;
`