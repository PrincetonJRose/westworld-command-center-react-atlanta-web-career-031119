import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import * as Images from '../services/Images'
import HostInfo from './HostInfo'


const Details = (props) => {
  let selectedHost = null
  if (props.selected)
    selectedHost = props.hosts.filter( host => host.id === props.selected )[0]

  // We'll render the logo if no host is selected. But if a host does get selected....
  // Watch the video to see how this works in the app.

  const renderSomething = () => (<Image size='medium' src={Images.westworldLogo}/>)

  return(
    <Segment id="details" className="HQComps">
      {
        selectedHost ? 
          <HostInfo
            host={selectedHost}
            toggleActiveStatus={props.toggleActiveStatus}
          />
        :
          renderSomething()
      }
    </Segment>
  )
}

export default Details
