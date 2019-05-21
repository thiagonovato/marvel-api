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

export function* getMoreHero(action) {
  try {
    const { data } = yield call(
      api.get,
      `v1/public/characters?limit=${action.payload.limiteAtual}&offset=${
        action.payload.limiteAtual
      }`
    );

    let soma = action.payload.limiteAtual + action.payload.limiteFinal;
    yield put(HeroActions.somaCount(soma));
    yield put(HeroActions.getMoreHeroSuccess(data));
  } catch (err) {
    yield put(HeroActions.getMoreHeroFailure("Erro ao buscar os heróis."));
  }
}
