import React from 'react';
import { Segment } from 'semantic-ui-react'
import HostList from './HostList'
import Host from './Host'

const ColdStorage = (props) => {
  const hosts = props.hosts.filter( host => !host.active )

  return (
    <Segment.Group className="HQComps">
      <Segment compact>
        <h3 className="labels">ColdStorage</h3>
      </Segment>
      <Segment compact>

        {/* Cold Storage contains hosts....but how? Directly? Or is there something else we could use to contain them... */}
        <HostList
          hosts={hosts}
          selected={props.selected}
          selectHost={props.selectHost}
        />
        

      </Segment>
    </Segment.Group>
  )
}

export default ColdStorage
