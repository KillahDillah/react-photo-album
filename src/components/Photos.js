import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Photos extends Component {
  render() {
    return(
      <div className="photo-wrap">
        <div className="back-button">
          <button><Link to="/album">Back to Album #</Link></button>
        </div>
        <div className="photo-head">
          <p> Photo #</p>
        </div>
        <div className="photo-box">
          <p> test</p>
        </div>
      </div>
    )
  }
}

export default Photos