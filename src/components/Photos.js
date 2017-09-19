import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getPhoto} from '../actions/images';


class Photos extends Component {

  componentWillMount(){
    getPhoto(this.props.match.params.photoId)
  }

  render() {
    return(
      <div className="photo-wrap">
        <div className="back-button">
          <button><Link to={"/album/"+this.props.photo.albumId}>Back to Album</Link></button>
        </div>
        <div className="photo-head">

          <p> Photo</p>
          
        </div>
        <div className="photo-box">
          <img src={this.props.photo.url} />
        </div>
      </div>
    )
  }
}
function appStateToProps(appState){
  return {
    photo:appState.photo
  }

}
export default connect (appStateToProps)(Photos)