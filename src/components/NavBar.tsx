import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavContainer, BufferContainer, NavBarStyles } from './styles/NavBar.styled'
import { navTitles } from '../texts/common/navTitles'
import NavItem from './NavItem'

function NavBar() {
  const navigate = useNavigate()
  const pageFilePath = window.location.pathname
  const pageName = pageFilePath.slice(1)

  function renderNavItem(item: string) {
    if (item === pageName || (item === 'Home' && pageName === '')) {
      return (
        <NavItem
          text={item}
          isActive
          onClick={() => {
            if (item === 'Home') {
              navigate('/')
            } else {
              navigate(`/${item.match('^[a-zA-Z-]*')}`)
            }
          }}
        />
      )
    }
    return (
      <NavItem
        text={item}
        onClick={() => {
          if (item === 'Home') {
            navigate('/')
          } else {
            navigate(`/${item.match('^[a-zA-Z-]*')}`)
          }
        }}
      />
    )
  }

  const renderedNavItems = navTitles.map((item) => renderNavItem(item))

  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset

    setVisible(prevScrollPos > currentScrollPos)
    setPrevScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos, visible, handleScroll])

  return (
    <NavContainer>
      <NavBarStyles isVisible={visible}>{renderedNavItems}</NavBarStyles>
      <BufferContainer />
    </NavContainer>
  )
}

export default NavBar
