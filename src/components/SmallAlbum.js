import React, { Component } from 'react';

class SmallAlbum extends Component {
  render() {
    return(
      <div className="album-wrap">
        <div className="left-nav">
          <li className="test">Album 1 </li>
          <li className="test">Album 2 </li>
          <li className="test">Album 3 </li>
          <li className="test">Album 4 </li>
        </div>
        <div className="small-album">
          <p> Album + id</p>
          <div className="album">
            <p>test</p>
          </div>
        </div>
      </div>
    )
  }
}

export default SmallAlbum