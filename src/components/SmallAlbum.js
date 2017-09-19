import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {getPhotos} from '../actions/images';
import {getAlbums} from '../actions/albums';
import {connect} from 'react-redux';

class SmallAlbum extends Component {

  static defaultProps = {
    album: {},
    photos: []
  }

  componentWillMount(){
    getPhotos(this.props.match.params.id)
    getAlbums()
  }

  componentWillReceiveProps(props){
    if(this.props.match.params.id != props.match.params.id) {
      getPhotos(props.match.params.id)
    }
  }

  render() {
    console.log(this.props)
    return(
      <div className="album-wrap">
        <div className="left-nav">
        <ul className="nav">
          {this.props.albums.map(album=>(
            <li className="test"><Link to={"/album/"+album.id}>{album.name}</Link></li>
          ))}
        </ul>
        </div>
        <div className="small-album">
          <div className="album-head">
              <p>Album </p>
          </div>
          <div className="album-list">
            <div className="photo-tab">
              {this.props.photos.map(photo=>(
            <li className="album-cover"><Link to={"/album/" + this.props.album.id+"/photo/"+photo.id}>
              <img src={photo.url} />
              <h5>{photo.name}</h5>
              </Link></li>
            ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function appStateToProps(appState) {
  return {
    album: appState.album,
    photos: appState.album.photos,
    albums: appState.albums
  }
}

export default connect (appStateToProps)(SmallAlbum)