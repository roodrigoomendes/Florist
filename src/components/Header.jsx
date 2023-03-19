import Navbar, { Btn } from './Navbar';
import Banner from '../assets/image/banner.png'
import IconPlay from '../assets/icone/play.svg'
import styled from 'styled-components';

export default function Header(){
  return(
    <BoxHeader>
      <Navbar/>
      <BoxContent>
        <h1>Nature's Beauty Delivered to You</h1>
        <p>Nature's beauty is just a click away with our online flower and plant shop. 
          We offer a wide variety of flowers that will bring a touch of nature to your home!
        </p>
      </BoxContent>
      <BoxButton>
        <BtnGreen>Book Now</BtnGreen>
        <BtnIcon>
          <img src={IconPlay} alt="Click aqui" />
        Watch Video
        </BtnIcon>
      </BoxButton>
    </BoxHeader>
  )
}

const BoxHeader = styled.header`
height: 758px;
width: 100%;
background-image: url(${Banner});
background-size: cover;
background-position: center;
color: #ffffff;
`

const BoxContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;


  h1{
    Font-weight: 700;
    font-size: 4rem;
    margin: 156px 0 15px;
  }

  p{
    width: 787px;
    font-weight: 500;
    font-size: 1.125rem;
    text-align: center;
    margin-bottom: 37px;
  }
`
const BoxButton = styled.div`
display: flex;
gap: 13px;
justify-content: center;
`

const BtnIcon = styled(Btn)`
gap: 10px;
`
export const BtnGreen = styled(Btn)`
background: #285A43;
border: #285A43;
`