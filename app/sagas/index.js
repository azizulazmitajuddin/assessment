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

function* actionWatcher() {
  yield takeLatest("GET_NEWS", fetchNews);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
