import { combineReducers } from '@reduxjs/toolkit'

// import categoriesReducer from './Reducers/categoriesReducer'
import categoriesReducer from './slicers/categoriesSlicer'
import categoryReducer from './slicers/categorySlicer'

export default combineReducers({
    categories: categoriesReducer,
    category: categoryReducer,
})