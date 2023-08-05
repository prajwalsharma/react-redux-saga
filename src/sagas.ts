import { call, put, takeEvery } from "redux-saga/effects";
import { GET_USERS_FETCH, GET_USERS_SUCCESS } from "./actions";
import { IUser } from "./types";

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data as IUser[];
};

function* workGetUsersFetch() {
  const users: IUser[] = yield call(fetchUsers);
  yield put({ type: GET_USERS_SUCCESS, users });
}

function* mySaga() {
  yield takeEvery(GET_USERS_FETCH, workGetUsersFetch);
}

export default mySaga;
