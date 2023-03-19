import styled from "styled-components";
import { Title } from "./Plants";

import Image2 from "../assets/image/image2.png"
import Image3 from "../assets/image/image3.png"
import Image4 from "../assets/image/image4.png"
import Image5 from "../assets/image/image5.png"

export default function Galery(){
  return(
    <>
    <Title>Our Gallery View</Title>
    <BoxGalery>
      <img src={Image2} alt="" />
      <img src={Image3} alt="" />
      <img src={Image4} alt="" />
      <img src={Image5} alt="" />
    </BoxGalery>
    </>
  )
}

const BoxGalery = styled.div`
display: flex;
flex-wrap: wrap;
gap: 10px;
margin-bottom: 120px;

@media screen and (max-width: 850px) {
  flex-direction: column;
  gap: 25px;
  width: 100%;
}
  >img{
    flex: 1;
    width: 100%;
  }

`