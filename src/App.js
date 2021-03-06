import React, { Component } from 'react'
import {
  Button,
  Container,
  Grid,
  Header,
  Menu,
  Segment,
  Visibility,
  Icon,
} from 'semantic-ui-react'

// CSS
import 'semantic-ui-css/semantic.css'
import './App.css'

// Components
import TileShooter from './components/tile_shooter/tileshooter.js'
import Tundra from './components/tundra/tundra.js'
import OdysseyMk3 from './components/odysseymk3/odysseymk3.js'
import RocketLaunch from './components/rocketlaunch/rocketlaunch.js'
import HoudiniSmoke from './components/houdini_smoke/houdinismoke.js'

// Fixed Menu
const FixedMenu = () => (
  	<Menu fixed='top' size='large'>
  	  	<Container>
  	  	  	<Menu.Item 
  	  	  		as='a' 
  	  	  		header 
  	  	  		size='large' 
  	  	  		style={{ fontSize: '1.2em' }} 
  	  	  	>
  	  	  	  	Adrian's Portfolio
  	  	  	</Menu.Item>
			
  	  	  	<Menu.Item 
  	  	  		as='a' 
  	  	  		href='https://github.com/AdrianOrenstein/latex_resume/blob/master/resume.pdf'
  	  	  	>
  	  	  		My Resume
  	  	  	</Menu.Item>
  	  	  	
  	  	  	<Menu.Item 
  	  	  		as='a' 
  	  	  		href="mailto:adrian.orenstein@gmail.com?Subject=Hello"
  	  	  	>
  	  	  	  	<Icon name='mail' size='large'/> adrian.orenstein@gmail.com
  	  	  	</Menu.Item>
			
  	  	  	<Menu.Item position='right'>
  	  	  	  
  	  	  	  	<Button 
  	  	  	  		color='linkedin' 
  	  	  	  		size='mini' 
  	  	  	  		href='https://www.linkedin.com/in/adrian-orenstein-7088b4151/'
  	  	  	  	>
  	  	  	  	  	<Icon name='linkedin' /> LinkedIn 
  	  	  	  	</Button>
				
  	  	  	  	<Button 
  	  	  	  		color='github' 
  	  	  	  		size='mini' 
  	  	  	  		style={{ marginLeft: '0.5em' }} 
  	  	  	  		href='https://github.com/AdrianOrenstein'
  	  	  	  	>
  	  	  	  	  	<Icon name='github' /> Github
  	  	  	  	</Button>
			
  	  	  	</Menu.Item>
  	  	</Container>
	
  	</Menu>
)

// Homepage Layout
export default class HomepageLayout extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ visible: false })
  showFixedMenu = () => this.setState({ visible: true })

  render() {
    const { visible } = this.state

    return (
      	<div>
        	{ visible ? <FixedMenu /> : null }

        	<div className='app-background'>
        		<Container>
        	  		<Visibility
        	  		  	onBottomPassed={this.showFixedMenu}
        	  		  	onBottomVisible={this.hideFixedMenu}
        	  		  	once={false}
        	  		>
        	  			<Segment
        	  			  	inverted
        	  			  	textAlign='center'
        	  			  	style={{ padding: '1em 0em' }}
        	  			  	vertical
        	  			  	className='transparent-block'
                      cover
        	  			>
        	    			{/* Task Bar */}
        	    			<Menu inverted pointing secondary size='medium'>
        	    			  	<Menu.Item 
        	    			  		as='a' 
        	    			  		active 
        	    			  		header 
        	    			  		style={{ fontSize: '1.2em' }}
        	    			  	>
        	    			  	  	Adrian's Portfolio
        	    			  	</Menu.Item>
        	    			  	
        	    			  	<Menu.Item 
        	    			  		as='a' 
        	    			  		style={{ marginBottom: '2px', marginLeft: '1em' }} 
        	    			  		href='https://github.com/AdrianOrenstein/latex_resume/blob/master/resume.pdf'
        	    			  	>
        	    			  		My Resume
        	    			  	</Menu.Item>
        	    			  	
        	    			  	<Menu.Item 
        	    			  		as='a' 
        	    			  		href="mailto:adrian.orenstein@gmail.com?Subject=Hello"
        	    			  	>
        	    			  	  	<Icon name='mail' size='large'/> adrian.orenstein@gmail.com
        	    			  	</Menu.Item>
        	    			</Menu>
				
        	    			{/* Hero */}
        	    			<div>
        	    				<Header
        	    				  	as='h1'
        	    				  	content='Welcome to my portfolio!'
        	    				  	inverted
                          className="portfolioHeader"
        	    				/>
					
        	    				<Container text style={{ padding: '1em 0em' }}>
        	    				  	<Header
        	    				    	as='h2'
        	    				    	content="This website will be used to host my most recent works, as well as provide an overview of what I'm currently working on."
        	    				    	inverted
        	    				    	style={{ fontSize: '1.25em', fontWeight: 'normal'}}
        	    				  	/>
        	    				</Container>
					
        	    				<Button 
        	    					color='linkedin' 
        	    					size='huge' 
        	    					href='https://www.linkedin.com/in/adrian-orenstein-7088b4151/'
        	    				>
        	    				  	<Icon name='linkedin' /> LinkedIn
        	    				</Button>
					
        	    				<Button 
        	    					color='github' 
        	    					size='huge' 
        	    					href='https://github.com/AdrianOrenstein'
        	    				>
        	    				  	<Icon name='github' /> Github
        	    				</Button>
        	    			</div>
	
        	  			</Segment>
        	  		</Visibility>
        		</Container>
        	</div>

        	{/* Imported Components */}
        	<div style={{ paddingTop: '4em' }}>
	    	    
	    	    <TileShooter/>
	
	    	    <Tundra/>
	
	    	    <OdysseyMk3/>
	
	    	    <RocketLaunch/>
	
	    	    <HoudiniSmoke/>
	
        	</div>
	
        	{/* Footer */}
        	<Segment inverted vertical style={{ padding: '1.5em' }}>
        	  	<Container>
        	  	  	<Grid divided inverted stackable>
			
        	  	  	  	<Grid.Row>
        	  	  	  	  	<Grid.Column width={7}>
        	  	  	  	  	  	<Header as='h4' inverted>
        	  	  	  	  	  	  	Copyright 2017 © Adrian Orenstein. All rights reserved.
        	  	  	  	  	  	</Header>
        	  	  	  	  	</Grid.Column>
        	  	  	  	</Grid.Row>
	
        	  	  	</Grid>
        	  	</Container>
        	</Segment>

    	</div>
    )
  }
}