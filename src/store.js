import {createStore} from 'redux';
import photoReducer from './reducers/photoReducer';

const store=createStore(photoReducer);


export default store