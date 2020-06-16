import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  loading: false,
  hasErrors: false,
  category: [],
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
      getCategory: state => {
        state.loading = true
      },
      getCategorySuccess: (state, { payload }) => {
        state.category = payload
        state.loading = false
        state.hasErrors = false
      },
      getCategoryFailure: state => {
        state.loading = false
        state.hasErrors = true
      },
    },
  })
  export const { getCategory, getCategorySuccess, getCategoryFailure } = categorySlice.actions

  export const categorySelector = state => state.category

  export default categorySlice.reducer
  
  export function fetchCategory(id) {
    return async dispatch => {
      dispatch(getCategory())
      try {
        const response = await fetch(`http://localhost:4000/categories/${id}`)
        const data = await response.json()
  
        dispatch(getCategorySuccess(data))
      } catch (error) {
        dispatch(getCategoryFailure())
      }
    }
  }
