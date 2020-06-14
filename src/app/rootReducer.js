import { combineReducers } from '@reduxjs/toolkit'

// import categoriesReducer from '../Components/Categories/CategoriesSlicer'
import categoryReducer from '../Components/Category/CategorySlicer'

export default combineReducers({
    // categories: categoriesReducer,
    category: categoryReducer,
})