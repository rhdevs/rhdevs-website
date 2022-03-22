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
        min: '20px',
        size: '24px',
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
      sectionTitle: {
        min: '20px',
        size: '24px',
        max: '2rem',
        weight: '600',
        height: '',
      },
      sectionText: {
        min: '12px',
        size: '16px',
        max: '1.6rem',
        weight: '300',
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
        size: '26px',
        max: '1.2rem',
        weight: '500',
        height: 'auto',
      },
      h4: {
        min: '8px',
        size: '18px',
        max: '0.8rem',
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
