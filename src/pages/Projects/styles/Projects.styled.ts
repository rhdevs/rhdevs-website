import styled from 'styled-components'
import logoBackground from '../../../assets/logo-background.png'

export const MainContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr max-content;
  grid-template-columns: 1fr;
`

export const ImageContainer = styled.div`
  background-image: url(${logoBackground});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ImageMask = styled.div`
  mask-image: linear-gradient(black 40%, transparent);
  text-align: center;
`

export const Image = styled.img`
  height: 20%;
  width: 15%;
`

export const ProjectPreviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 50px;
  margin: 0 100px 40px 100px;
`
