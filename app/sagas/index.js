import { put, takeLatest, all, takeEvery } from "redux-saga/effects";

function* fetchNews() {
  const url = "http://api.openweathermap.org/data/2.5/weather?q=Singapore,Sg&APPID=4d51c4b6af2f553a36e37c399a76cda8";
  // const url1 = "http://api.openweathermap.org/data/2.5/forecast?id=1880252&APPID=4d51c4b6af2f553a36e37c399a76cda8";
  const json = yield fetch(url, {
    Method: "POST",
    Headers: "Content-Type: application/json"
  }).then(res => res.json());

  yield put({ type: "NEWS_RECEIVED", data: json });
}

function* fetchListNews() {
  const url1 = "http://api.openweathermap.org/data/2.5/forecast?id=1880252&APPID=4d51c4b6af2f553a36e37c399a76cda8";
  const json1 = yield fetch(url1, {
    Method: "POST",
    Headers: "Content-Type: application/json"
  }).then(res1 => res1.json());

  yield put({ type: "LIST_NEWS_RECEIVED", data1: json1 });
}

function* actionWatcher() {
  yield takeLatest("GET_NEWS", fetchNews);
}

function* actionListWatcher() {
  yield takeLatest("GET_LIST_NEWS", fetchListNews);
}

export default function* rootSaga() {
  yield all([actionWatcher(), actionListWatcher()]);
}
