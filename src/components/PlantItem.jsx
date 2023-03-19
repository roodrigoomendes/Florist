import styled from "styled-components"


export default function PlantItem(props){
  return(
    <BoxItem>
      <ImageItem>
        <img src={props.ImageItem} alt="" />
      </ImageItem>
      <InformationItem>
        <DescriptionItem>
            <h1>{props.TitleItem}</h1>
            <PriceItem>
              <p>{props.PriceOld}</p>
              <h2>{props.Price}</h2>
            </PriceItem>
        </DescriptionItem>
        <ButtonItem>Buy Now</ButtonItem>
      </InformationItem>
    </BoxItem>
  )
}

const BoxItem = styled.div`
width: 280px;
height: 314px;
border: 1px solid rgba(0, 0, 0, 0.03);
box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.02);
`
const ImageItem = styled.div`
width: 280px;
height: 250px;
border: 1px solid rgba(0, 0, 0, 0.03);
`

const DescriptionItem = styled.div`
margin-right: 45px;

h1{
  font-weight: 900;
  font-size: 18px;
  color: #337A5B;
  margin-bottom: 5px
}
`
const InformationItem =styled.div`
display: flex;
padding: 10px 24px;
align-items: center;
justify-content: center;

`

const PriceItem = styled.div`
display: flex;
gap: 7px;

p{
  font-weight: 400;
  font-size: 16px;
  text-decoration-line: line-through;
  color: #121212;
  opacity: 0.5;
}

h2{
  font-weight: 700;
  font-size: 16px;  
  color: #337A5B;
}
`

const ButtonItem = styled.button`
width: 98px;
height: 33px;
border: 1px solid rgba(51, 122, 91, 0.6);
border-radius: 3px;
color: #337A5B;
font-weight: 900;
font-size: 14px;

&:hover{
  background-color: #337A5B;
  color: #ffffff;
  transition: all 0.4s;
}
`