import React from 'react'
import {
  Container,
  Segment,
  Header,
  Image,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.css'

import image from './img.jpg'

const TileShooter = () => (
  <div>
      <Segment vertical style={{ padding: '2em 2em' }}>
        <Container text>
          
          <Header as='h1' dividing>AIE Game - Tile Shooter</Header>
          <p>
            The final game for my Certificate III in Information, Digital Media and Technology
          </p>
          
          <a href='https://www.youtube.com/watch?v=tO_4_oIxSIw'>Video Link</a>
      
          <Image src={image} style={{ padding: '1em 0em' }}/>
        </Container>
      </Segment>
  </div>
)

export default TileShooter


