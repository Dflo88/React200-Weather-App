import { combineReducers } from 'redux';
import SearchBarReducer from './components/SearchBar/SearchBarReducer';

const rootReducer = combineReducers({
    SearchBar: SearchBarReducer
});

export default rootReducer;
