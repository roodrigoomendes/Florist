
import styled from "styled-components"

export default function CardService(props){
  return(
    <CardItem>
      <Image>
        <img src={props.ImageIcon} alt={props.Title} />
      </Image>
      <Description>
        <h1>{props.Title}</h1>
        <p>{props.children}</p>
      </Description>
    </CardItem>
  )
}

const CardItem = styled.div`
width: 350px;
height: 380px;
border-radius: 10px;
display: flex;
flex-direction: column;
text-align: start;
padding: 20px 50px;
border: 1px solid rgba(0, 0, 0, 0.03);
box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.02);
`
const Image = styled.div`
margin-left: 20px;
`

const Description = styled.div`
width: 259px;

h1{
  margin: 10px 0 20px;
  color: #285A43;
  font-weight: 900;
  font-size: 20px;
}

p{
  text-align: justify;
  font-weight: 500;
  font-size: 16px;
}
`