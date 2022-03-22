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
        min: '0.5rem',
        size: '1.25vw', // about 24px at 1920 width
        max: '24px', // 24px
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
      sectionTitle: {
        min: '1rem', // 16px
        size: '1.9vw', // about 36px at 1920 width
        max: '36px', // 36px
        weight: '600',
        height: '',
      },
      h1: {
        min: '40px',
        size: '64px',
        max: '4rem',
        weight: '300',
        height: '1',
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
        height: '1',
      },
      previewTitle: {
        min: '18px',
        size: '1.4vw', // about 27px at 1920 width
        max: '26px',
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
