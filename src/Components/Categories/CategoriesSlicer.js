import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  loading: false,
  hasErrors: false,
  categories: [],
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getCategories: state => {
      state.loading = true
    },
    getCategoriesSuccess: (state, { payload }) => {
      state.categories = payload
      state.loading = false
      state.hasErrors = false
    },
    getCategoriesFailure: state => {
      state.loading = false
      state.hasErrors = true
    },
  },
})

export const { getCategories, getCategoriesSuccess, getCategoriesFailure } = categoriesSlice.actions
export const categoriesSelector = state => state.categories
export default categoriesSlice.reducer

export function fetchCategories() {
  return dispatch => {
    dispatch(getCategories())

    try {
      const response = fetch('http://localhost:4000/categories')
      const data = response.json()

      dispatch(getCategoriesSuccess(data))
    } catch (error) {
      dispatch(getCategoriesFailure())
    }
  }
}
