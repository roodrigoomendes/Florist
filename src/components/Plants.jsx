import styled from "styled-components"
import PlantItem from "./PlantItem"
import Cactus from '../assets/image/cactus.png'
import Bonsai from '../assets/image/bonsai.png'
import Cactus2 from '../assets/image/cactus2.png'
import Cactus3 from '../assets/image/cactus3.png'
import Cactus4 from '../assets/image/cactus4.png'
import Camedorea from '../assets/image/camedorea.png'
import Eucalipto from '../assets/image/eucalipto.png'
import Palmeira from '../assets/image/palmeira.png'

export default function Plants(){
  return(
    <BoxPlants>
      <Title>What we offer to you</Title>

      <ListPlants>
      <PlantItem ImageItem={Cactus} TitleItem={'Cactus'} PriceOld={'($10)'} Price={'$8'}/>
      <PlantItem ImageItem={Bonsai} TitleItem={'Bonsai'} PriceOld={'($10)'} Price={'$8'}/>
      <PlantItem ImageItem={Cactus2} TitleItem={'Cactus'} PriceOld={'($10)'} Price={'$8'}/>
      <PlantItem ImageItem={Cactus3} TitleItem={'Cactus'} PriceOld={'($10)'} Price={'$8'}/>
      <PlantItem ImageItem={Cactus4} TitleItem={'Cactus'} PriceOld={'($10)'} Price={'$8'}/>
      <PlantItem ImageItem={Camedorea} TitleItem={'Camedorea'} PriceOld={'($10)'} Price={'$8'}/>
      <PlantItem ImageItem={Eucalipto} TitleItem={'Eucalipto'} PriceOld={'($10)'} Price={'$8'}/>
      <PlantItem ImageItem={Palmeira} TitleItem={'Palmeira'} PriceOld={'($10)'} Price={'$8'}/>
      </ListPlants>
    </BoxPlants>
  )
}

const BoxPlants = styled.section`
margin-bottom: 120px;
`

export const Title = styled.h1`
  font-weight: 600;
  font-size: 2.25rem;
  color: #285A43;
  text-align: center;
  margin-bottom: 35px;

`

const ListPlants = styled.section`
display: flex;
gap: 27px;
flex-wrap: wrap;
padding: 0 120px;
`