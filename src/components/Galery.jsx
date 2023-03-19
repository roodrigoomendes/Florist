import styled from "styled-components";
import { Title } from "./Plants";

import Image1 from "../assets/image/image1.png"
import Image2 from "../assets/image/image2.png"
import Image3 from "../assets/image/image3.png"
import Image4 from "../assets/image/image4.png"
import Image5 from "../assets/image/image5.png"

export default function Galery(){
  return(
    <>
    <Title>Our Gallery View</Title>
    <BoxGalery>
      <img src={Image1} alt="" />
      <div>        
      <img src={Image2} alt="" />
      <img src={Image3} alt="" />
      <img src={Image4} alt="" />
      <img src={Image5} alt="" />
      </div>
    </BoxGalery>
    </>
  )
}

const BoxGalery = styled.div`
display: flex;
gap: 10px;
margin-bottom: 120px;

  div{
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    
    img{
      flex: 1;
    }
  }
`