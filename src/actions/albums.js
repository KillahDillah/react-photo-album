import store from '../store';


export function getAlbums(){
  fetch('/albums')
  .then(resp => resp.json())
  .then(resp => {
    store.dispatch({
      type:'GET-ALBUMS',
      albums:resp
    })  
  })
}
