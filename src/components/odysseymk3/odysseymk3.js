import React from 'react'
import {
	Container,
	Segment,
	Header,
	Image,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.css'

import image from './img.jpg'

const OdysseyMk3 = () => (

	<div>
		<Segment vertical style={{ padding: '2em 2em' }}>
			<Container text>

				<Header as='h1' dividing>Odyssey Mk3</Header>

				<p>
					The final version of the Odyssey research vessel (Yr 10 2014)
				</p>

				<Image src={image} style={{ padding: '1em 0em' }}/>
			</Container>
		</Segment>
	</div>
)

export default OdysseyMk3
