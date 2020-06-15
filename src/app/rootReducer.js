import { combineReducers } from '@reduxjs/toolkit'

import categoriesReducer from './Reducers/categoriesReducer'
import categoryReducer from './Reducers/categoryReducer'
import imgDetailsReducer from './Reducers/imgDetailsReducer'

export default combineReducers({
    categories: categoriesReducer,
    category: categoryReducer,
    photo: imgDetailsReducer,
})