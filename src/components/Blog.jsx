import ItemBlog from "./ItemBlog";
import { Title } from "./Plants";
import Blog1 from "../assets/image/imageblog.png"
import Blog2 from "../assets/image/imageblog2.png"
import Blog3 from "../assets/image/imageblog3.png"
import styled from "styled-components";

export default function Blog(){
  return(
    <>
    <Title>Interesting blog to read</Title>
    <ListArticle>
      <ItemBlog Image={Blog1} Title={'More productive with an atmosphere of greenery'} >
      An atmosphere of greenery can increase productivity in the workplace. 
      Studies show that plants improve air quality and decrease stress...
      </ItemBlog>
      
      <ItemBlog Image={Blog2} Title={'More productive with an atmosphere of greeneryThe benefits of plants in your room'} >
      Plants in your room can bring numerous benefits, such as improved air quality, reduced stress, 
      and increased feelings of well-being....
      </ItemBlog>
      
      <ItemBlog Image={Blog3} Title={'Hobbyist plants in the house'} >
      Having hobbyist plants in the house is a great way to bring nature indoors. 
      Not only do they purify the air, but they....
      </ItemBlog>
    </ListArticle>
    </>
  )
}
const ListArticle = styled.div`
display: flex;
flex-wrap: wrap;
gap: 70px;
justify-content: center;
margin-bottom: 120px;
`