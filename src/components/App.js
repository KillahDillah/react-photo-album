import React, { Component } from 'react';
import '../styles/App.css';
import Albums from './Albums';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SmallAlbum from './SmallAlbum';
import Photos from './Photos';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Albums} />
          <Route path="/album:id"component={SmallAlbum} />
          <Route path="/photo" component={Photos} />
        </Switch>
      </Router>
    );
  }
}

export default App;
