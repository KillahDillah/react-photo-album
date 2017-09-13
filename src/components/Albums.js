import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import SmallAlbum from './SmallAlbum';


class Albums extends Component {
  render() {
    return(
      <div className="albums-wrap">
        <div className="album-header">
          <p> My Albums </p>
        </div>
        <div className="album">
          <p>insert function</p>
          <Link to="/album">Album+id</Link>
        </div>
      </div>
    )
  }
}

export default Albums