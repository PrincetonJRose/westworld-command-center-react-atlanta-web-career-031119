import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'

const WestworldMap = (props) => {

  return (
    <Segment id="map" >
      {/* What should we render on the map? */}
      {
        props.areas.map( area =>
          <Area
            area={area}
            hosts={props.hosts}
            selected={props.selected}
            selectHost={props.selectHost}
          />
        )
      }
    </Segment>
  )
}

export default WestworldMap
