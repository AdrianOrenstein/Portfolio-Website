import React from 'react'
import {
  Container,
  Segment,
  Header,
  Image,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.css'

import image from './img.jpg'

const HoudiniSmoke = () => (
  <div>
    <Segment vertical style={{ padding: '2em 2em' }}>
      <Container text>
        
        <Header as='h1' dividing>Houdini Smoke Simulation</Header>
        <p>
          Learning houdini over the school holidays (Yr 11 holidays 2015)
        </p>
        
        <a href='https://www.youtube.com/watch?v=MSIW2ujOSfs'>Video Link</a>
    
        <Image src={image} style={{ padding: '1em 0em' }}/>
      </Container>
    </Segment>
  </div>
)

export default HoudiniSmoke


