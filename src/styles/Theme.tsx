import React from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'

const theme: DefaultTheme = {
  palette: {
    common: {
      black: '#000',
      white: '#fff',
      gray: '#b3b3b3',
    },
    primary: '#10bcbc',
    secondary: '#5e2ba1',
    danger: '#cc5849',
  },
  typography: {
    main: 'Inter',
    fontSize: {
      body: {
        min: '12px',
        size: '1.25vw',
        max: '18px',
        weight: '300',
        height: '',
      },
      input: {
        min: '16px',
        size: '1.25vw',
        max: '20px',
        weight: '300',
        height: '2',
      },
      sectionTitle: {
        min: '16px',
        size: '1.8vw',
        max: '28px',
        weight: '600',
        height: '',
      },
      h1: {
        min: '20px',
        size: '2vw',
        max: '38px',
        weight: '300',
        height: '1',
      },
      h2: {
        min: '14px',
        size: '1.2vw',
        max: '18px',
        weight: '600',
        height: '2',
      },
      h3: {
        min: '14px',
        size: '1vw',
        max: '18px',
        weight: '500',
        height: '1',
      },
      previewTitle: {
        min: '16px',
        size: '1.5vw',
        max: '24px',
        weight: '500',
        height: 'auto',
      },
      h4: {
        min: '10px',
        size: '1vw',
        max: '18px',
        weight: '300',
        height: 'auto',
      },
    },
  },
}

function Theme({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme
