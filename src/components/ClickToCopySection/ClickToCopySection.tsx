import React from 'react'
import { useTheme } from 'styled-components'

import { ClickToCopyLink, ClickToCopyTitle } from './styles/ClickToCopySection.styled'

function ClickToCopySection({ text, value, title }: { text: string; value?: string; title?: string }) {
  const theme = useTheme()
  return (
    <>
      <ClickToCopyTitle style={{ color: theme.palette.common.white } /* white by default */}>{title}</ClickToCopyTitle>
      <ClickToCopyLink
        onClick={() => navigator.clipboard.writeText(value ?? text) /* set text as value if not explicitly specified */}
        style={{ color: theme.palette.primary }}
      >
        {text}
      </ClickToCopyLink>
    </>
  )
}

ClickToCopySection.defaultProps = {
  value: undefined,
  title: undefined,
}

export default ClickToCopySection
