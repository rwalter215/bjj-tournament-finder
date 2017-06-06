import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { } from 'react-foundation';
import './Nav.css'
import TournamentList from '../TournamentList/TournamentList'
import BlogWall from '../../components/BlogWall/BlogWall'
import NewsList from '../NewsList/NewsList'
import Contact from '../Contact/Contact'


export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Router>
        <div>
          <nav className="hover-underline-menu nav" data-menu-underline-from-center>
            <ul className="menu align-center">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/news">News</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </nav>

          <Route exact path="/" component={TournamentList}/>
          <Route exact path="/blog" component={BlogWall}/>
          <Route exact path="/news" component={NewsList}/>
          <Route exact path="/contact" component={Contact}/>
        </div>
      </Router>
    )
  }
}
