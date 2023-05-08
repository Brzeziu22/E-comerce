import {combineReducers} from 'redux';
import { userReducer } from './user/userReducer';
import { categoriesReducer } from './categories/categoriesReducer';
import { dropdownReducer } from './dropdown/dropdownReducer';

export const rootReducer=combineReducers({
    user:userReducer,
    categories:categoriesReducer,
    dropdown:dropdownReducer
})