import store from '../store';


export function getPhotos(albumId){
  fetch("/albums/"+albumId+"?_embed=photos")
  .then(resp => resp.json())
  .then(resp=>{
    store.dispatch({
      type:'GET-PHOTOS',
      payload:resp
    })
  })
}

export function getPhoto(photoId){
  fetch('/photos/'+photoId)
  .then(resp => resp.json())
  .then(resp =>{
    store.dispatch({
      type:'GET-PHOTO',
      photo: resp
    })
  })
}
