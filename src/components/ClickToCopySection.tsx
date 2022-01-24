import { useTheme } from 'styled-components'

import { ClickToCopyLink, ClickToCopyTitle } from './styles/ClickToCopySection.styled'

function ClickToCopySection({ text, value, title }: { text: string; value?: string; title?: string }) {
  const theme = useTheme()
  const { body, h3 } = { ...theme.typography.fontSize }

  return (
    <>
      <ClickToCopyTitle color={theme.palette.common.white} fontType={h3}>
        {title}
      </ClickToCopyTitle>
      <ClickToCopyLink
        onClick={() => navigator.clipboard.writeText(value ?? text) /* set text as value if not explicitly specified */}
        color={theme.palette.primary}
        fontType={body}
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
