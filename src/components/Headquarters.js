import React from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import Details from './Details'
// import LogPanel from './LogPanel'
import ColdStorage from './ColdStorage'

const Headquarters =(props)=> {
  // Remember, there's many ways to do this. This doesn't have to be a class component. It's up to you.
  const { hosts, selected } = props

  return(
    <Grid celled='internally'>
      <Grid.Column width={8}>

      {/* Something goes here.... */}
      <ColdStorage
        hosts={hosts}
        selected={selected}
        selectHost={props.selectHost}
      />

      </Grid.Column>
      <Grid.Column width={5}>
        <Details 
          hosts={hosts}
          selected={selected}
          toggleActiveStatus={props.toggleActiveStatus}
        />
      </Grid.Column>
      <Grid.Column width={3}>

      {/* and here. Take visual cues from the screenshot/video in the Readme. */}

      </Grid.Column>
    </Grid>
  )
}

export default Headquarters;
