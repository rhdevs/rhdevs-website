import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MainContainer, NavBarStyles, BufferContainer, NavContainer } from './styles/NavBar.styled'
import { navTitles } from '../texts/common/navTitles'
import NavItem from './NavItem'

function NavBar() {
  const navigate = useNavigate()
  const pageFilePath = window.location.pathname
  const pageName = pageFilePath.slice(1)

  function renderNavItem(item: string) {
    return (
      <NavContainer>
        <NavItem
          text={item}
          isActive={
            item === pageName ||
            (item === 'Home' && pageName === '') ||
            (item === 'About Us' && pageName === 'About') ||
            (item === 'Contact Us' && pageName === 'Contact')
          }
          onClick={() => {
            if (item === 'Home') {
              navigate('/')
            } else {
              navigate(`/${item.match('^[a-zA-Z-]*')}`)
            }
          }}
        />
        <BufferContainer />
      </NavContainer>
    )
  }

  const renderedNavItems = navTitles.map((item) => renderNavItem(item))

  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [isVisible, setVisible] = useState(true)

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset

    setVisible(prevScrollPos > currentScrollPos)
    setPrevScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos, isVisible, handleScroll])

  return (
    <MainContainer>
      <NavBarStyles isVisible={isVisible}>{renderedNavItems}</NavBarStyles>
    </MainContainer>
  )
}

export default NavBar
