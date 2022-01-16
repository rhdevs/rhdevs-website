import React from 'react'
import { Route, Routes as Switch } from 'react-router-dom'
import { PATHS } from './PATHS'
import NavBar from '../components/NavBar'

const Home = React.lazy(() => import(/* webpackChunckName: "Home" */ '../pages/Home'))
const About = React.lazy(() => import(/* webpackChunckName: "About" */ '../pages/About'))
const Articles = React.lazy(() => import(/* webpackChunckName: "Articles" */ '../pages/Articles'))
const Contact = React.lazy(() => import(/* webpackChunckName: "Contact" */ '../pages/Contact'))
const Events = React.lazy(() => import(/* webpackChunckName: "Events" */ '../pages/Events'))
const Projects = React.lazy(() => import(/* webpackChunckName: "Projects" */ '../pages/Projects'))

export function Routes() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path={PATHS.ABOUT} element={<About />} />
        <Route path={PATHS.ARTICLES} element={<Articles />} />
        <Route path={PATHS.CONTACT} element={<Contact />} />
        <Route path={PATHS.EVENTS} element={<Events />} />
        <Route path={PATHS.PROJECTS} element={<Projects />} />
      </Switch>
    </>
  )
}
