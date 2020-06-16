import { combineReducers } from '@reduxjs/toolkit'

import categoriesReducer from './slicers/categoriesSlicer'
import categoryReducer from './slicers/categorySlicer'

export default combineReducers({
    categories: categoriesReducer,
    category: categoryReducer,
})