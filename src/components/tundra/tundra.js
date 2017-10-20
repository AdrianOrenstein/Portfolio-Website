import React from 'react'
import {
	Container,
	Segment,
	Header,
	Image,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.css'

import image from './img.jpg'

const Tundra = () => (

	<div>
		<Segment vertical style={{ padding: '2em 2em' }}>
			<Container text>

				<Header as='h1' dividing>Tundra</Header>

				<p>
					Tundra is a winter survival game, made using the Unreal 4 Engine for my Certificate II in Media.
				</p>

				<a href='https://www.youtube.com/watch?v=fUHWuqskuMM'>Video Link</a>

				<Image src={image} style={{ padding: '1em 0em' }}/>

			</Container>
		</Segment>
	</div>
)

export default Tundra
