const React = require('react')
const ReactDOM = require('react-dom')
//const Title = require('./Title')
import Title from './Title'
import './styles/App.css'

const App = () => (
  <div className='app-container'>
    <Title/>
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))
