import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestWorldMap from './components/WestworldMap'
import Headquarters from './components/Headquarters'

const mainUrl = 'http://localhost:4000/'


class App extends Component {

  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.

  state = {
    hosts: [],
    areas: [],
    selected: null,
  }

  componentDidMount() {
    fetch(mainUrl + 'hosts')
    .then( r => r.json() )
    .then( hostsData => {
      this.setState({ hosts: hostsData })
    })

    fetch(mainUrl + 'areas')
    .then( r => r.json() )
    .then( areasData => {
      let areas = areasData.map( area => {
        let name = area.name
          name = name.split('_').map(word => word = word[0].toUpperCase() + word.slice(1) ).join(' ')
        return {...area, capName: name}
      })
      this.setState({ areas: areas })
    })
  }

  selectHost =(id)=> {
    if (id === this.state.selected)
      id = null
    this.setState({ selected: id })
  }

  toggleActiveStatus =(id)=> {
    let hosts = [...this.state.hosts]
    hosts = hosts.map( host => {
      if (host.id === id)
        host.active = !host.active
      return host
    })
    this.setState({ hosts: hosts })
  }

  render(){
    return (
      <Segment id='app'>

        <WestWorldMap
          areas={this.state.areas}
          hosts={this.state.hosts}
          selected={this.state.selected}
          selectHost={this.selectHost}
        />
        <Headquarters
          hosts={this.state.hosts}
          selected={this.state.selected}
          selectHost={this.selectHost}
          toggleActiveStatus={this.toggleActiveStatus}
        />
      </Segment>
    )
  }
}

export default App;
