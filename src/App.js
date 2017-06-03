import React from 'react'
import ReactDOM from 'react-dom'
import Title from './Title'
import TournamentList from './TournamentList'
import './App.css'

const App = () => (
  <div className='app-container'>
    <Title/>
    <TournamentList/>
  </div>
)

// ReactDOM.render(<App />, document.getElementById('root'))
export default App
