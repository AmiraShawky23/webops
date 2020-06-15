import {
  configureStore,
  getDefaultMiddleware
} from "@reduxjs/toolkit";

// import counterReducer from '../features/counter/counterSlice';
import rootReducer from './rootReducer'



const store = configureStore({
  reducer: rootReducer,
});


export default store;