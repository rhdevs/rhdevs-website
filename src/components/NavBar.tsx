import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { PATHS } from 'src/routes/PATHS'
import { navTitles } from '../texts/common/navTitles'
import { MainContainer, NavItemContainer } from './styles/NavBar.styled'
import NavItem from './NavItem'

function NavBar() {
  const navigate = useNavigate()
  const pageFilePath = window.location.pathname
  const pageName = pageFilePath.slice(1)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [isVisible, setVisible] = useState(true)

  const handleScroll = () => {
    const currentScrollPos = window.scrollY
    setVisible(prevScrollPos > currentScrollPos)
    setPrevScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos, isVisible, handleScroll])

  return (
    <MainContainer>
      <NavItemContainer isVisible={isVisible}>
        {navTitles.map((item) => (
          <NavItem
            text={item}
            isActive={
              item.toLowerCase() === pageName ||
              (item === 'Home' && pageName === '') ||
              (item === 'About Us' && `/${pageName}` === PATHS.ABOUT) ||
              (item === 'Contact Us' && `/${pageName}` === PATHS.CONTACT)
            }
            onClick={() => {
              if (item === 'Home') {
                navigate('/')
              } else {
                navigate(`/${item.toLowerCase().match('^[a-zA-Z-]*')}`)
              }
            }}
          />
        ))}
      </NavItemContainer>
    </MainContainer>
  )
}

export default NavBar
