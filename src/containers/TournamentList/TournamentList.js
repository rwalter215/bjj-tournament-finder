import React from 'react'
//import './TournamentList.css'
import data from '../../tournaments.json'
import Tournament from '../../components/Tournament/Tournament'
import TournamentListHeader from '../../components/TournamentListHeader/TournamentListHeader'

export default class TournamentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tournaments: {}
    };
  }

  componentWillMount() {
    let tournamentsCopy = data.tournaments;
    tournamentsCopy.sort(function(a, b) {
      a = new Date(a.date);
      b = new Date(b.date);
      return a < b ? -1 : a > b ? 1 : 0;
    });
    console.log('copy: ', tournamentsCopy)
    this.setState({ tournaments: tournamentsCopy})
  }

  render() {
    return (
      <div>
        <TournamentListHeader/>
        <div>
          {data.tournaments.map((tournament) => {
            console.log('tournament: ', tournament)
            return (<Tournament tournament={tournament}/>)
          })}
        </div>
      </div>
    )
  }
}
