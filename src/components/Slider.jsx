import { useState } from 'react'
import styled from 'styled-components'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

import { sliderItems } from '../data'

const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  background-color: #000000;
  margin-top: 30px;
`
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translate(${props => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`
const Slide = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  align-items: center;
  background-color: #${props => props.bg};
`
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
  background-color: #000000;
`
const Image = styled.img`
  height: 60%;
  width: 50%;
  margin-left: 17%;
  @media (max-width: 680px) {
    height: 10%;
    width: 100%;
    margin: auto;
  }
  @media screen and (min-width:681px) and (max-width: 1024px) {
    height: 40%;
    width: 100%;
    margin: auto;
  }
`

const Arrow = styled.div`
  width: 30px;
  height: 50px;
  background-color: #121212;
  border-radius: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === 'left' && '20%'};
  right: ${props => props.direction === 'right' && '27%'};
  margin-top: 13%;
  cursor: pointer;
  z-index: 2;
  @media (max-width: 680px) {
    bottom: 50%;
    left: ${props => props.direction === 'left' && '5%'};
    right: ${props => props.direction === 'right' && '5%'};
  }
  @media screen and (min-width:681px) and (max-width: 1024px) {
    bottom: 50%;
    left: ${props => props.direction === 'left' && '5%'};
    right: ${props => props.direction === 'right' && '5%'};
  }
  @media screen and (min-width:1025px) and (max-width: 1430px) {
    bottom: 50%;
    left: ${props => props.direction === 'left' && '20%'};
    right: ${props => props.direction === 'right' && '35%'};
  }
`

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }
  return (
    <Container>
      <Arrow direction='left' onClick={() => handleClick('left')}>
        <ChevronLeftIcon className='text-white' />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        { sliderItems.map((item) => (
          <Slide bg={item.bg}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction='right' onClick={() => handleClick('right')}>
        <ChevronRightIcon className='text-white' />
      </Arrow>
    </Container>
  )
}
export default Slider
