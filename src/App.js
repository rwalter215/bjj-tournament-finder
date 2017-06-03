import React from 'react'
import Title from './components/Title/Title'
import TournamentList from './containers/TournamentList/TournamentList'
import './App.css'

const App = () => (
  <div className='app-container'>
    <Title/>
    <TournamentList/>
  </div>
)

export default App
