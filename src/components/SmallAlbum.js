import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import data from '../db.json';

class SmallAlbum extends Component {

  state={
    albums:[],
    photos:[]
  }

  componentWillMount(){
    this.setState({
      albums:data.albums,
      photos:data.photos
    })
  }

  render() {
    return(
      <div className="album-wrap">
        <div className="left-nav">
          <li className="test"><Link to="/album">Album 1 </Link></li>
          <li className="test"><Link to="/album">Album 2 </Link></li>
          <li className="test"><Link to="/album">Album 3 </Link></li>
          <li className="test"><Link to="/album">Album 4 </Link></li>
          <li className="test"><Link to="/album">Album 5 </Link></li>
        </div>
        <div className="small-album">
          <div className="album-head">
              <p>Album{this.state.params}</p>
          </div>
          <div className="album-list">
            <div className="photo-tab">
              <li><Link to="/photo">test</Link></li>
              <h5>photo #</h5>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SmallAlbum