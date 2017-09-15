import store from '../store';

export function getPhotos(photo){
  store.dispatch({
    type:"GET_PHOTOS",
    photos:{
      id: id,
      name:name,
      url: url,
      albumId:albumId
    }
  })
}

export function getAlbum(album){
  store.dispatch({
    type:"GET_ALBUMS",
    albums:{
      id: id,
      name: name,
      coverPhoto:coverPhoto
    }
  })
}