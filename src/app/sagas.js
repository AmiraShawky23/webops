import { call, takeEvery, put } from "redux-saga/effects";
import { fetchData } from "./store";
import { sagaActions } from "./sagasActions";
import getCategory from '../Components/Category/CategorySlicer'

export function* fetchDataSaga(id) {
  try {
    return function(dispatch) {
      return fetch('http://localhost:4000/categories/'+ id)
      .then(res => res.json()).then(result => {
          dispatch(getCategory(result))
          console.log(result);
      })
          .catch( err => console.log(err));
  }
    // let result = yield call(async () => {
    //     try {
    //       const response = await fetch("http://localhost:4000/categories");
    //       const data = await response.json();
    //       return data;
    //     } catch (e) {
    //       console.log(e);
    //     }
    //   }
    // );
    // yield put(fetchData(result.data));
  } catch (e) {
    console.log(e);
  }
}

export default function* rootSaga() {
  // yield takeEvery(sagaActions.REQUEST_API_DATA, fetchDataSaga);
}