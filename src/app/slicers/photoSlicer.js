import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  loading: false,
  hasErrors: false,
  photo: null,
}

const photoSlice = createSlice({
    name: 'photo',
    initialState,
    reducers: {
      getPhoto: state => {
        state.loading = true
      },
      getPhotoSuccess: (state, { payload }) => {
        state.loading = false
        state.hasErrors = false
        state.photo = payload
      },
      getPhotoFailure: state => {
        state.loading = false
        state.hasErrors = true
      },
    },
  })
  export const { getPhoto, getPhotoSuccess, getPhotoFailure } = photoSlice.actions

  export const photoSelector = state => state.photo

  export default photoSlice.reducer
  
  export function fetchPhoto(id, photoid) {
    return async dispatch => {
      dispatch(getPhoto())

      try {
        const response = await fetch(`http://localhost:4000/categories/${id}`)
        const data = await response.json()

        const photo = data.photos.filter(tempPhoto => tempPhoto.id === photoid)
        
        dispatch(getPhotoSuccess(photo))
      } catch (error) {
        dispatch(getPhotoFailure())
      }
    }
  }