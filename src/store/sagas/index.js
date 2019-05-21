import { all, takeLatest } from "redux-saga/effects";
import { Types as HeroTypes } from "../ducks/hero";
import { getHero, getMoreHero } from "./hero";

export default function* rootSaga() {
  yield all([
    takeLatest(HeroTypes.ADD_REQUEST, getHero),
    takeLatest(HeroTypes.ADD_MORE_REQUEST, getMoreHero)
  ]);
}
