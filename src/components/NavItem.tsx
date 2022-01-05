/* eslint-disable react/prefer-stateless-function */
import React from 'react'
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
  return (
    <NavDiv isActive={isActive} onClick={onClick}>
      {text}
    </NavDiv>
  )
}

NavItem.defaultProps = defaultProps
