import React from 'react'
import {
	Container,
	Segment,
	Header,
	Image,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.css'

import image from './img.jpg'

const RocketLaunch = () => (

	<div>
		<Segment vertical>
			<Container text>

				<Header as='h1' dividing>Rocket Launch</Header>
				<p>
					Three test renders of the rocket launch in 'Odyssey' (Yr 12 2014)
				</p>
				<a href='https://www.youtube.com/watch?v=RjqUq15gxww'>Video Link</a>
				<Image src={image} style={{ padding: '1em 0em' }}/>
			</Container>
		</Segment>
	</div>
)

export default RocketLaunch
