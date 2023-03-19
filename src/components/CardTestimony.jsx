import styled from "styled-components"

export default function CardTestimony(props){
  return(
    <BoxTestimony>
      <NameTestimony>
        <img src={props.ImageAvatar} alt="" />
        <h1>{props.Name}</h1>
      </NameTestimony>
      <p>
        {props.children}
      </p>
    </BoxTestimony>
  )
}

const BoxTestimony = styled.section`
padding: 40px;
background: #F8F8F8;
width: 360px;


  p{
    font-weight: 500;
    font-size: 16px;
    width: 250px;
  }
`

const NameTestimony = styled.div`
display: flex;
margin-bottom: 30px;
align-items: center;
gap: 20px;

  h1{
    font-weight: 900;
    font-size: 1.25rem; 
    color: #285A43;
    margin-right: 20px;
  }
`