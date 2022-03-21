import { MouseEventHandler } from 'react'
import { useTheme } from 'styled-components'
import { StyledNavItem } from './styles/NavItem.styled'

type NavItemProps = {
  text: string
  isActive?: boolean
  onClick?: MouseEventHandler<HTMLDivElement>
}

const defaultProps = {
  isActive: false,
  onClick: undefined,
}

export default function NavItem({ text, isActive, onClick }: NavItemProps) {
  const theme = useTheme()
  const { h3 } = { ...theme.typography.fontSize }
  return (
    <StyledNavItem isActive={isActive} onClick={onClick} fontType={h3}>
      {text}
    </StyledNavItem>
  )
}

NavItem.defaultProps = defaultProps
