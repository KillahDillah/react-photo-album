import React, { Component } from 'react';
import '../styles/App.css';
import Albums from './Albums';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import SmallAlbum from './SmallAlbum';
import Photos from './Photos';
import store from '../store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Albums} />
          <Route exact path="/album/:id"component={SmallAlbum} />
          <Route path="/album/:albumId/photo/:photoId" component={Photos} />
        </Switch>
      </Router>
      </Provider>
    );
  }
}

export default App;
