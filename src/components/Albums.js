import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {getAlbums} from '../actions/albums';
import {connect} from 'react-redux';


class Albums extends Component {

componentWillMount(){
  getAlbums()
}

  render() {
    return(
      <div className="albums-wrap">
        <div className="album-header">
          <p> My Albums </p>
        </div>
        <div className="album-list">
          {this.props.albums.map(album=>(
            <li className="album-cover"><Link to={"/album/"+album.id}>
              <img src={album.coverPhoto} />
              <h5>{album.name}</h5>
              </Link></li>
            ))}
        </div>
      </div>
    )
  }
}

function appStateToProps(appState) {
  return {
    albums: appState.albums
  }
}

export default connect (appStateToProps)(Albums)