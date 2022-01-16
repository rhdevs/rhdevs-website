import React from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'

const theme: DefaultTheme = {
  palette: {
    common: {
      black: '#000',
      white: '#fff',
      gray: '#888',
    },
    primary: '#10bcbc',
    secondary: '#5e2ba1',
  },
  typography: {
    main: 'Inter',
    fontSize: {
      body: {
        min: '20px',
        size: '30px',
        max: '2rem',
        weight: '300',
        height: '',
      },
      input: {
        min: '24px',
        size: '36px',
        max: '2.4rem',
        weight: '300',
        height: '2',
      },
      h2: {
        min: '16px',
        size: '24px',
        max: '1.6rem',
        weight: '600',
        height: '2',
      },
      h3: {
        min: '12px',
        size: '18px',
        max: '1.2rem',
        weight: '500',
        height: '2.8',
      },
    },
  },
}

function Theme({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme
