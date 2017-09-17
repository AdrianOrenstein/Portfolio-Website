import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  // Link
} from 'react-router-dom'

import NavBar from './views/NavBar/NavBar.js'
import Hero from './views/Hero/Hero.js'
import Home from './views/Home/Home.js'
import Contact from './views/Contact/Contact.js'
import Gallery from './views/Gallery/Gallery.js'
import Download from './views/Download/Download.js'

// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// )

// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>
//           Rendering with React
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>
//           Components
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>
//           Props v. State
//         </Link>
//       </li>
//     </ul>

//     <Route path={`${match.url}/:topicId`} component={Topic}/>
//     <Route exact path={match.url} render={() => (
//       <h3>Please select a topic.</h3>
//     )}/>
//   </div>
// )

const App = () => (
  <Router>
    <div>
      <Route path="*" component={NavBar}/>
      <Route path="*" component={Hero}/>
      <Route exact path="/" component={Home}/>
      <Route path="/gallery" component={Gallery}/>
      <Route path="/download" component={Download}/>
      <Route path="/contact" component={Contact}/>
    </div>
  </Router>
)
export default App