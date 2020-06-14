import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  category: {},
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    getCategory: state => {
      state.loading = true
    },
  },
})

export const { getCategory } = categorySlice.actions
export const categorySelector = state => state.category
export default categorySlice.reducer

export function fetchCategory(id) {
    return function(dispatch) {
        return fetch('http://localhost:4000/categories/'+ id)
        .then(res => res.json()).then(result => {
            dispatch(getCategory(result))
            console.log(result);
        })
            .catch( err => console.log(err));
    }
}
