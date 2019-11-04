import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = (props) => {
  const hosts = props.hosts

  return(
    <Card.Group itemsPerRow={6}>
      {/* What do you think, partner? */}
      {
        hosts.map( host => 
        <Host
          host={host}
          selected={props.selected}
          selectHost={props.selectHost}
        /> )
      }
    </Card.Group>
  )
}

export default HostList
