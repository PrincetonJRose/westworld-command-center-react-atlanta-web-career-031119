import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = (props) => {
  const host = props.host

  return(
    <Card
      className={ props.selected === host.id ? "host selected" : "host" }

      onClick={()=> props.selectHost(host.id)}
      image={/* I wonder what goes here...*/ host.imageUrl}
      raised
    />
  )
}

export default Host
