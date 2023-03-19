import styled from "styled-components"
import CardService from "./CardService"
import Indoor from "../assets/icone/Indoor_Plant.svg"
import Outdoor from "../assets/icone/Outdoor_Plant.png"
import Pots from "../assets/icone/Pots_Plant.svg"


export default function Types(){
  return(
    <BoxAbout>
      <BoxDescription>
        <h1>We Help choose the most suitable plants for you</h1>
      </BoxDescription>

      <BoxService>
        <CardService ImageIcon={Indoor} Title={'Indoor Plant'}>
          Bring the beauty of nature to your outdoor 
          spaces with our wide selection of outdoor plants
        </CardService>
        <CardService ImageIcon={Outdoor} Title={'Outdoor Plant'}>
          Bring a touch of greenery to your living spaces with our collection 
          of indoor plants, perfect for purifying the air and adding a natural 
          touch to your home.
        </CardService>
        <CardService ImageIcon={Pots} Title={'Pots Plant'}>
          Add a touch of style to your indoor or outdoor spaces 
          with our collection of pots plants, available in a variety 
          of sizes and designs to fit any decor
        </CardService>
      </BoxService>
    </BoxAbout>
  )
}

const BoxAbout = styled.section`
text-align: center;
margin: 120px 0;
align-items: center;
justify-content: center;

`

const BoxDescription = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 0 20px 90px;

h1{
  
  font-weight: 600;
  font-size: 36px;
  color: #285A43;
}
`

const BoxService = styled.div`
display: flex;
flex-wrap: wrap;
margin: 90px 0;
align-items: center;
justify-content: space-evenly;
gap: 20px;
>:nth-child(2){
  background: #285A43;
  color: #ffffff;
  h1{
    color: #ffffff;
  }
}
`