import { all, takeLatest } from "redux-saga/effects";
import { Types as HeroTypes } from "../ducks/hero";
import { getHero } from "./hero";

export default function* rootSaga() {
  yield all([takeLatest(HeroTypes.ADD_REQUEST, getHero)]);
}
