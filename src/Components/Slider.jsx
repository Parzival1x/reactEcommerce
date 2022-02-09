import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { sliderItems } from "../data";
import { useState } from "react";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position:  relative;
    overflow: hidden;
`;

const Arrow = styled.div`
    color: black;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background-color: gray;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div `
    height: 100%;
    display: flex;
    transform: translateX(${props=>props.slideIndex * -100}vw);/*prop slideindex used here to transform images*/
    transition: all 1s ease;
`

const Slide = styled.div `
display: flex;
align-items: center;
width: 100vw;
height: 100vh;
margin:auto;
top:0;
bottom:0;`

const ImageContainer = styled.div `
flex: 1;
height: 100%;`

const InfoContainer = styled.div `
flex: 1;
padding: 50px;`

const Image = styled.img `
flex: 1;
height: 80%;`

const Title = styled.h1 `
font-size: 70px;
`

const Description = styled.h3 `
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`

const Button = styled.button `
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {
    const [slideIndex, setslideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction==="left"){
            setslideIndex(slideIndex>0 ? slideIndex-1 /*movement of slide */ : 2/*go to which slide*/);
        }else{
            setslideIndex(slideIndex<2 ? slideIndex+1 : 0);
        }
    };

    return (
        <Container>
            <Arrow direction = "left" onClick={()=> handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper /*defining any prop and can use it in styling*/slideIndex={slideIndex}>
                {sliderItems.map(item=>(
                <Slide>
                <ImageContainer>
                    <Image src={item.img}></Image>
                    {/* <Image src="/slider1.png" /> */}
                </ImageContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Description>{item.Description}</Description>
                    <Button>Shop Now!</Button>    
                </InfoContainer> 
                </Slide>
                ))}
            </Wrapper>
            <Arrow direction = "right" onClick={()=> handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    );
}
export default Slider