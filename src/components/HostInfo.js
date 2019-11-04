import '../stylesheets/HostInfo.css'
import React from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'


const HostInfo =(props)=> {

  let host = this.props.host
  let locations
  return (
    <Grid>
      <Grid.Column width={6}>
        <Image
          src={ /* pass in the right image here */ host.imageUrl}
          floated='left'
          size='small'
          className="hostImg"
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <Card>
          <Card.Content>
            <Card.Header>
              {host.firstName}  {host.lastName !== 'n/a' ? host.lastName : null} | { true ? <Icon name='man' /> : <Icon name='woman' />}
              { /* Think about how the above should work to conditionally render the right First Name and the right gender Icon */ }
            </Card.Header>
            <Card.Meta>
              <Radio
                onChange={() => this.props.toggleActiveStatus(host.id)}
                label={
                  host.active ?
                    "Active"
                  :
                    "Decommissioned"
                  }
                checked={host.active}
                slider
              />
            </Card.Meta>

            <Divider />
            Current Area:
            <Dropdown
              onChange={this.handleChange}
              value={this.state.value}
              options={this.state.options}
              selection
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  )
}

export default HostInfo
