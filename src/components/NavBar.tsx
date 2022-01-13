import { useNavigate } from 'react-router-dom'
import { MainContainer } from './styles/NavBar.styled'
import { navTitles } from '../texts/common/navTitles'
import NavItem from './NavItem'

function NavBar() {
  const navigate = useNavigate()
  const url = window.location.href
  const pageName = url.substring(url.lastIndexOf('/') + 1)

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
              navigate(`/${item.replace(/\s/g, '')}`)
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
            navigate(`/${item.replace(/\s/g, '')}`)
          }
        }}
      />
    )
  }

  const renderedNavItems = navTitles.map((item) => renderNavItem(item))

  return (
    <div>
      <MainContainer>{renderedNavItems}</MainContainer>
    </div>
  )
}

export default NavBar