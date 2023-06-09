import CardService from "./CardService";
import GrowSprout from "../assets/icone/Grow_Sprout.svg"
import Temperature from "../assets/icone/Temperature.svg"
import TimeCosuming from "../assets/icone/Time-Cosuming.svg"
import Pruning from "../assets/icone/Pruning.png"
import ImageService from "../assets/image/ImageService.png"
import styled from "styled-components";

export default function Service(){
  return(
    <BoxService>
      <BoxImage>
        <img src={ImageService} alt="" />
      </BoxImage>
      <BoxItemService>
        <CardService ImageIcon={TimeCosuming} Title={'Quality Product'}>
          Our flowers are of the highest quality, carefully selected 
          and sourced from reputable
        </CardService>
        <CardService ImageIcon={GrowSprout} Title={'Always Fresh'}>
          Our flowers are always fresh, handpicked and delivered 
          promptly for maximum longevity and enjoyment.
        </CardService>
        <CardService ImageIcon={Temperature} Title={'Indoor Plant'}>
          Bring the beauty of nature to your outdoor 
          spaces with our wide selection of outdoor plants
        </CardService>
        <CardService ImageIcon={Pruning} Title={'Excelent Service'}>
          We pride ourselves on providing excellent service, 
          going above and beyond to meet our customers' needs        </CardService>
      </BoxItemService>
    </BoxService>
  )
}

const BoxService = styled.section`
display: flex;
justify-content: space-evenly;
align-items: center;
margin-bottom: 120px;
padding: 5px;

@media screen and (max-width: 850px) {
    flex-wrap: wrap;
  }
`
const BoxImage = styled.div`
>img{
  width: 100%;
}
`
const BoxItemService = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
gap: 10px;

`