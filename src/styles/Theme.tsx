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
      main: {
        min: '20px',
        size: '30px',
        max: '2rem',
      },
      input: {
        min: '24px',
        size: '36px',
        max: '2.4rem',
      },
      h2: {
        min: '16px',
        size: '24px',
        max: '1.6rem',
      },
      h3: {
        min: '12px',
        size: '18px',
        max: '1.2rem',
      },
    },
  },
}

function Theme({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme
