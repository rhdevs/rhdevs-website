import styled from 'styled-components'
import logoBackground from '../../../assets/logo-background.png'

export const MainContainer = styled.div`
  height: 100%;
  overflow: scroll;
  background-color: ${(props) => props.theme.palette.common.black};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ImageContainer = styled.div`
  background-image: url(${logoBackground});
  background-repeat: no-repeat;
  background-size: cover;
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 35px 0;
`

export const ImageMask = styled.div`
  mask-image: linear-gradient(black 40%, transparent);
  text-align: center;
`

export const Image = styled.img`
  height: 20%;
  width: 15%;
`

export const Divider = styled.div`
  height: 1px;
  width: 50%;
  background-color: ${(props) => props.theme.palette.primary};
`

export const ProjectPreviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 50px 40px;
`
