import styled from 'styled-components'
import logoBackground from '../../../assets/logo_background.png'

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
export const DividerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
`

export const Divider = styled.div`
  width: 60%;
  border: 1.4px solid ${(props) => props.theme.palette.primary};
`

export const ProjectPreviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 1rem;
  margin: 0 1rem 3rem;
`
