import React from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'

export const PRIMARY_COLOUR = '#10BCBC'

const theme: DefaultTheme = {
  palette: {
    common: {
      black: '#000',
      white: '#fff',
      gray: '#b3b3b3',
    },
    primary: PRIMARY_COLOUR,
  },
  typography: {
    main: 'Inter',
    fontSize: {
      h1: {
        min: '38px',
        size: '2vw',
        max: '42px',
        weight: '300',
        height: '1',
      },
      h2: {
        min: '21px',
        size: '1.8vw',
        max: '28px',
        weight: '600',
        height: '1.3',
      },
      h3: {
        min: '16px',
        size: '1.2vw',
        max: '20px',
        weight: '500',
        height: '1',
      },
      body: {
        min: '18px',
        size: '1.25vw',
        max: '25px',
        weight: '300',
        height: '1.3',
      },
    },
  },
}

function Theme({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme
