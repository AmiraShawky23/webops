import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  loading: false,
  hasErrors: false,
  photos: [],
}

const photosSlice = createSlice({
    name: 'photos',
    initialState,
    reducers: {
      getPhotos: state => {
        state.loading = true
      },
      getPhotosSuccess: (state, { payload }) => {
        state.loading = false
        state.hasErrors = false
        state.photos = payload
      },
      getPhotosFailure: state => {
        state.loading = false
        state.hasErrors = true
      },
    },
  })
  export const { getPhotos, getPhotosSuccess, getPhotosFailure } = photosSlice.actions

  export const photosSelector = state => state.photos

  export default photosSlice.reducer
  
  export function fetchPhotos(id, photoid) {
    return async dispatch => {
      dispatch(getPhotos())
  
      try {
        const response = await fetch(`http://localhost:4000/categories/${id}`)
        const data = await response.json()
        const photos = data.photos.filter(tempPhotos => tempPhotos.id !== photoid)
  
        dispatch(getPhotosSuccess(photos))
      } catch (error) {
        dispatch(getPhotosFailure())
      }
    }
  }