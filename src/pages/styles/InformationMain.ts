import styled from 'styled-components'

export const InformationMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  margin: 3rem auto;
  max-width: 70rem;
  padding: 0 3rem;

  @media screen and (max-width: 700px) {
    gap: 40px;
  }
`
