import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.css'

import greyBackground from './img/GreyBackground2.svg'

const FixedMenu = () => (
  <Menu fixed='top' size='large'>
    <Container>

      <Menu.Item as='a' header size='large'>
        Adrian's Portfolio
      </Menu.Item>

      <Menu.Item as='a' active>The Archive</Menu.Item>
      <Menu.Item as='a'>About Me</Menu.Item>
      <Menu.Item as='a'>Contact Me</Menu.Item>

      <Menu.Item position='right'>
        
        <Button color='linkedin' size='mini' href='https://www.linkedin.com/in/adrian-orenstein-7088b4151/'>
          <Icon name='linkedin' /> 
          LinkedIn 
        </Button>

        <Button color='github' size='mini' style={{ marginLeft: '0.5em' }} href='https://github.com/AdrianOrenstein'>
          <Icon name='github' /> 
          Github
        </Button>

      </Menu.Item>
    </Container>

  </Menu>
)

export default class HomepageLayout extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ visible: false })
  showFixedMenu = () => this.setState({ visible: true })

  render() {
    const { visible } = this.state

    return (
      <div>
        { visible ? <FixedMenu /> : null }

        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item as='a' header style={{ marginRight: '3em' }}>
                  Adrian's Portfolio
                </Menu.Item>
                <Menu.Item as='a' active>Home</Menu.Item>
                <Menu.Item as='a'>Work</Menu.Item>
                <Menu.Item as='a'>Company</Menu.Item>
                <Menu.Item as='a'>Careers</Menu.Item>

                <Menu.Item position='right' size='mini'>
                  <Button color='linkedin' size='mini'>
                    <Icon name='linkedin' /> 
                    LinkedIn 
                  </Button>

                  <Button color='github' size='mini' style={{ marginLeft: '0.5em' }}>
                    <Icon name='github' /> 
                    Github
                  </Button>
                </Menu.Item>

              </Menu>
            </Container>

            <Container text>
              
              <Header
                as='h1'
                content='Welcome to my portfolio!'
                inverted
                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
              />
              
              <Header
                as='h2'
                content="This website will be used to host my most recent works, as well as provide an overview of what I'm currently working on."
                inverted
                style={{ fontSize: '1.25em', fontWeight: 'normal' }}
              />

              <Button color='linkedin' size='huge'>
                <Icon name='linkedin' /> LinkedIn
              </Button>

              <Button color='github' size='huge'>
                <Icon name='github' /> Github
              </Button>


            </Container>

          </Segment>
        </Visibility>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>Something something header text</Header>
                <p style={{ fontSize: '1.33em' }}>
                  Blah blahh lbahlhlh, Blah blahh lbahlhlh, Blah blahh lbahlhlhBlah blahh lbahlhlh, Blah blahh lbahlhlhBlah blahh lbahlhlh,Blah blahh lbahlhlh
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>We Make Bananas That Can Dance</Header>
                <p style={{ fontSize: '1.33em' }}>
                  Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.
                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Image
                  bordered
                  rounded
                  size='large'
                  src='/assets/images/wireframe/white-image.png'
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Button size='huge'>Check Them Out</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>"What a Company"</Header>
                <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>"I shouldn't have gone with their competitor."</Header>
                <p style={{ fontSize: '1.33em' }}>
                  <Image avatar src='/assets/images/avatar/large/nan.jpg' />
                  <b>Nan</b> Chief Fun Officer Acme Toys
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Container text>
            <Header as='h3' style={{ fontSize: '2em' }}>Breaking The Grid, Grabs Your Attention</Header>
            <p style={{ fontSize: '1.33em' }}>
              Instead of focusing on content creation and hard work, we have learned how to master the art of doing
              nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic
              and worth your attention.
            </p>
            <Button as='a' size='large'>Read More</Button>

            <Divider
              as='h4'
              className='header'
              horizontal
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
              <a href='#'>Case Studies</a>
            </Divider>

            <Header as='h3' style={{ fontSize: '2em' }}>Did We Tell You About Our Bananas?</Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but it's really
              true.
              It took years of gene splicing and combinatory DNA research, but our bananas can really dance.
            </p>
            <Button as='a' size='large'>I'm Still Quite Interested</Button>
          </Container>
        </Segment>

        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                
                <Grid.Column width={3}>
                  <Header as='h4' inverted>Created with:</Header>
                  <a href='https://react.semantic-ui.com' inverted >Semantic-UI-React</a>
                </Grid.Column>

                <Grid.Column width={7}>
                  <Header as='h4' inverted>Contact Me</Header>
                  <p>Email: adrian.orenstein@gmail.com</p>
                </Grid.Column>

              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    )
  }
}