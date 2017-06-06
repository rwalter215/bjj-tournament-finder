import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Title from './components/Title/Title'
import Nav from './containers/Nav/Nav'
import TournamentList from './containers/TournamentList/TournamentList'
import Footer from './containers/Footer/Footer'
import './App.css'

const App = () => (
  <div className='app-container'>
    <Title/>
    <Nav/>
    <Footer />
  </div>
)

export default App
