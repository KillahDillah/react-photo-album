const intialState={
  albums:[],
  photos:[]
}

export default function (state=intialState,action){
  switch(action.type){
    case 'GET-ALBUM':
      return{...state, albums:action.albums}
    default:
      return state
  }
}