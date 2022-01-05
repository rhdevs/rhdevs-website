import React from 'react'
import { useTheme } from 'styled-components'
import { ClickToCopyLink, ClickToCopyStyled, ClickToCopyTitle } from './styles/ClickToCopySection.styled'

function ClickToCopySection({
  text,
  value,
  title,
}: {
  text: string
  value?: string | undefined
  title?: string | undefined
}) {
  const theme = useTheme()
  return (
    <ClickToCopyStyled>
      <ClickToCopyTitle>{title ?? 'no title'}</ClickToCopyTitle>
      {/* set text as value if not explicitly specified */}
      <ClickToCopyLink
        onClick={() => navigator.clipboard.writeText(value ?? text)}
        style={{ color: theme.palette.primary }}
      >
        {text}
      </ClickToCopyLink>
    </ClickToCopyStyled>
  )
}

ClickToCopySection.defaultProps = {
  value: undefined,
  title: undefined,
}

export default ClickToCopySection
