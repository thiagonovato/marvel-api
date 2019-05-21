/**
 * TYPES
 */

export const Types = {
  ADD_REQUEST: "hero/ADD_REQUEST",
  ADD_SUCCESS: "hero/ADD_SUCCESS",
  ADD_FAILURE: "hero/ADD_FAILURE",
  ADD_MORE_REQUEST: "hero/ADD_MORE_REQUEST",
  ADD_MORE_SUCCESS: "hero/ADD_MORE_SUCCESS",
  ADD_MORE_FAILURE: "hero/ADD_MORE_FAILURE",
  SOMA_COUNT: "count/SOMA_COUNT"
};

/**
 * REDUCERS
 */

const INITIAL_STATE = {
  loading: false,
  loadingMore: false,
  data: [],
  error: null,
  errorMore: false,
  count: 20
};

export default function hero(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, error: null, data: [], loading: true };
    case Types.ADD_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload.error
      };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.data]
      };
    case Types.ADD_MORE_REQUEST:
      return { ...state, errorMore: null, loadingMore: true };
    case Types.ADD_MORE_SUCCESS:
      return {
        ...state,
        loadingMore: false,
        errorMore: null,
        data: [...state.data, action.payload.data]
      };
    case Types.ADD_MORE_FAILURE:
      return {
        ...state,
        loadingMore: false,
        errorMore: action.payload.error
      };
    case Types.SOMA_COUNT:
      return {
        ...state,
        count: action.payload.limit
      };
    default:
      return state;
  }
}

/**
 * ACTIONS
 */
export const Creators = {
  getHeroRequest: () => ({
    type: Types.ADD_REQUEST
  }),
  getHeroSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data }
  }),
  getHeroFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error }
  }),
  getMoreHeroRequest: (limiteAtual, limiteFinal) => ({
    type: Types.ADD_MORE_REQUEST,
    payload: { limiteAtual, limiteFinal }
  }),
  getMoreHeroSuccess: data => ({
    type: Types.ADD_MORE_SUCCESS,
    payload: { data }
  }),
  getMoreHeroFailure: error => ({
    type: Types.ADD_MORE_FAILURE,
    payload: { error }
  }),
  somaCount: limit => ({
    type: Types.SOMA_COUNT,
    payload: { limit }
  })
};
