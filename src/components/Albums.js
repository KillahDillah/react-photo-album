import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import data from '../db.json'


class Albums extends Component {

state={
  albums:[]
}

componentWillMount(){
  this.setState({
    albums:data.albums
  })
}

  render() {
    return(
      <div className="albums-wrap">
        <div className="album-header">
          <p> My Albums </p>
        </div>
        <div className="album">
        {this.state.albums.map(album=>(
          <li className="album-cover"><Link to={"/album" + album.id}><img src={album.coverPhoto} /></Link></li>
          ))
        }
        </div>
        <div>
        {this.props.children}
        </div>
      </div>
    )
  }
}

export default Albums