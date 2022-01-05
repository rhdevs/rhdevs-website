import React from 'react'
import { Route, Routes as Switch } from 'react-router-dom'

const Home = React.lazy(() => import(/* webpackChunckName: "Home" */ '../pages/Home'))
const About = React.lazy(() => import(/* webpackChunckName: "Home" */ '../pages/About'))
const Articles = React.lazy(() => import(/* webpackChunckName: "Home" */ '../pages/Articles'))
const Contact = React.lazy(() => import(/* webpackChunckName: "Home" */ '../pages/Contact'))
const Events = React.lazy(() => import(/* webpackChunckName: "Home" */ '../pages/Events'))
const Projects = React.lazy(() => import(/* webpackChunckName: "Home" */ '../pages/Projects'))

export const Routes = () => <Switch></Switch>
