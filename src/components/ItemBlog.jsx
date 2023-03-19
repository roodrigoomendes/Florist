import styled from "styled-components"
import Date from "../assets/icone/date.png"
import Arrow from "../assets/icone/arrow.png"

export default function ItemBlog(props){
  return(
    <ArticleBlog>
      <ImageBlog>
        <img src={props.Image} alt="" />
      </ImageBlog>
      <DescriptionBlog>
        <h1>{props.Title}</h1>
        <p>{props.children}</p>
        <FooterDescription>
          <DataDescription>
            <img src={Date} alt="" />
            <p>January 20, 2023</p>
          </DataDescription>
          <a href="#">
            Read More
            <img src={Arrow} alt="" />
          </a>
        </FooterDescription>
      </DescriptionBlog>
    </ArticleBlog>
  )
}

const ArticleBlog = styled.article`
width: 360px;
height: 550px;
display: flex;
flex-direction: column;
margin-bottom: 120px;
`

const ImageBlog = styled.article`
width: 360px;
height: 335px;
margin-bottom: 16px;
`

const DescriptionBlog = styled.article`
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
margin: 10px 0;
gap: 10px;
`

const FooterDescription = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

a{
  img{
    margin-left: 5px;
  }

  display: flex;
  align-items: center;
  color: #285A43;
}
`

const DataDescription = styled.div`
display: flex;
`