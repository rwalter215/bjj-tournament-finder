const React = require('react')
const ReactDOM = require('react-dom')
//const Title = require('./Title')
import Title from './Title'
import TournamentList from './TournamentList'
import './styles/App.css'

const App = () => (
  <div className='app-container'>
    <Title/>
    <TournamentList/>
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))
