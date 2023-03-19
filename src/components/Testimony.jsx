import CardTestimony from "./CardTestimony";
import { Title } from "./Plants";
import Jessica from "../assets/image/jessica.png"
import Kate from "../assets/image/kate.png"
import Grace from "../assets/image/grace.png"
import styled from "styled-components";


export default function Testimony(){
  return(
    <>
    <Title>What do they say about us</Title>
    
    <ListTestimony>
      <CardTestimony Name={'Jessica'} ImageAvatar={Jessica}>
      “ Highly recommend this website for quality flowers and plants. 
      Great prices, timely delivery and excellent customer service. ”
      </CardTestimony>

      <CardTestimony Name={'Kate'} ImageAvatar={Kate}>
      "Great service, beautiful flowers, timely delivery. 
      recommend." 
      </CardTestimony>

      <CardTestimony Name={'Grace'} ImageAvatar={Grace}>
      "I am very happy with my purchase from this website, 
      the plants were healthy and arrived on time.”
      </CardTestimony>
    </ListTestimony>
    </>
  )
}

const ListTestimony = styled.section`
display: flex;
flex-wrap: wrap;
gap: 70px;
align-items: center;
justify-content: center;
margin-bottom: 120px;
`