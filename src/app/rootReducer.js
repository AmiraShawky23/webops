import { combineReducers } from '@reduxjs/toolkit'

import categoriesReducer from './slicers/categoriesSlicer'
import categoryReducer from './slicers/categorySlicer'
import photoReducer from './slicers/photoSlicer'
import photosReducer from './slicers/photosSlicer'

export default combineReducers({
    categories: categoriesReducer,
    category: categoryReducer,
    photo: photoReducer,
    photos: photosReducer,
})