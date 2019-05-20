import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as HeroActions } from "../ducks/hero";

export function* getHero() {
  try {
    const { data } = yield call(api.get, `v1/public/characters`);

    yield put(HeroActions.getHeroSuccess(data));
  } catch (err) {
    yield put(HeroActions.getHeroFailure("Erro ao buscar os heróis."));
  }
}
