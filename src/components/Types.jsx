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
        <p>
        Our selection includes a wide variety of flowers, from classic roses 
        to exotic orchids, as well as a variety of lush indoor and outdoor 
        plants and also offer unique floral arrangements that are perfect for 
        any occasion, whether you're looking to brighten up your home or send 
        a thoughtful gift. 
        </p>

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
margin: 120px;

`

const BoxDescription = styled.div`
display: flex;
gap: 75px;
margin-bottom: 90px;

h1{
  width: 476px;
  font-weight: 600;
  font-size: 36px;
  color: #285A43;
}

p{
    width: 648px;
    font-weight: 500;
    font-size: 18px;
    text-align: justify;
  }
  `

const BoxService = styled.div`
display: flex;
margin: 90px 0;
align-items: center;
justify-content: space-around;

>:nth-child(2){
  background: #285A43;
  color: #ffffff;
  h1{
    color: #ffffff;
  }
}
`