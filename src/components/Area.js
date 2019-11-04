import React from 'react';
import '../stylesheets/Area.css'
import HostList from './HostList'
import Host from './Host'

const Area = (props) => {
  let area = props.area
  let areaHosts = props.hosts.filter( host => host.active && host.area === area.name )



  return (
    <div className='area' id={/* Pass in the area name here to make sure this is styled correctly */area.name}>
      <h3 className='labels'>{/* Don't just pass in the name from the data...clean that thing up */area.capName}</h3>

      {/* See Checkpoint 1 item 2 in the Readme for a clue as to what goes here */}
      {
        <HostList
          hosts={areaHosts}
          selected={props.selected}
          selectHost={props.selectHost}
        />
      }
        )
      }
    </div>
  )
}

Area.propTypes = {
  hosts: function(props, propName, componentName){
    if(props.hosts.length > props.limit){
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      )
    }
  }
}

export default Area;
