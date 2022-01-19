import { useTheme } from 'styled-components'
import { NavDiv } from './styles/NavItem.styled'

type NavItemProps = {
  text: string
  isActive?: boolean
  onClick?: () => void
}

const defaultProps = {
  isActive: false,
  onClick: () => undefined,
}

export default function NavItem({ text, isActive, onClick }: NavItemProps) {
  const theme = useTheme()
  const { h3 } = { ...theme.typography.fontSize }
  return (
    <NavDiv isActive={isActive} onClick={onClick} fontType={h3}>
      {text}
    </NavDiv>
  )
}

NavItem.defaultProps = defaultProps
