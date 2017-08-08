import React from 'react'

import { Sidebar, Menu, Icon, Form, Label, Divider, Button, Container, Visibility } from 'semantic-ui-react'

import './NavBar.css'
import 'semantic-ui-css/components/container.css'
import 'semantic-ui-css/components/visibility.css'

import 'semantic-ui-css/components/sidebar.css'
import 'semantic-ui-css/components/menu.css'
import 'semantic-ui-css/components/icon.css'
import 'semantic-ui-css/components/form.css'
import 'semantic-ui-css/components/label.css'
import 'semantic-ui-css/components/divider.css'
import 'semantic-ui-css/components/button.css'


import 'semantic-ui-css/components/header.css'
import 'semantic-ui-css/components/site.css'
import 'semantic-ui-css/components/reset.css'
import 'semantic-ui-css/components/transition.css'



const NavBar = () => (
	updateLog = eventName => () => this.setState({ log: [eventName, ...this.state.log] })
	<div>
		<nav className="bar ui top fixed menu">
			<div className="ui container">
				<div className="ui large secondary menu">
					
					<div className="item navbar">
						<span className="normal portfolio">ADRIAN'S</span>
						<span className="bold portfolio">PORTFOLIO</span>
						<Visibility>
						onPassed={{
							'80%': this.updateLog('80%'),
						}}
						</Visibility>
					</div>

					<div className="right menu">
						<div className="item">
							<span> Hi </span>
						</div>
					</div>

				</div>
			</div>
		</nav>
	</div>
)

export default NavBar