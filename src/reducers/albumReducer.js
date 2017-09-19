const intialState={
  albums:[],
  album:{},
  photo:{}
}

export default function(state=intialState, action){
  switch(action.type){
    case 'GET-PHOTOS':
    // return {...state, photos: filter state.albums for the photos that match action.payload
      return{...state, album:action.payload}
    case 'GET-ALBUMS':
      return{...state,albums:action.albums}
    case 'GET-PHOTO':
      return{...state, photo:action.photo}
    default:
      return state
  }
}
