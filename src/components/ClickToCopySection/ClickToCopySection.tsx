import { useTheme } from 'styled-components'

import { ClickToCopyLink, ClickToCopyTitle } from './styles/ClickToCopySection.styled'

function ClickToCopySection({ text, value, title }: { text: string; value?: string; title?: string }) {
  const theme = useTheme()
  const { main, h3 } = { ...theme.typography.fontSize }

  return (
    <>
      <ClickToCopyTitle color={theme.palette.common.white} fontSize={`clamp(${h3.min}, ${h3.size}, ${h3.max})`}>
        {title}
      </ClickToCopyTitle>
      <ClickToCopyLink
        onClick={() => navigator.clipboard.writeText(value ?? text) /* set text as value if not explicitly specified */}
        color={theme.palette.primary}
        fontSize={`clamp(${main.min}, ${main.size}, ${main.max})`}
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
