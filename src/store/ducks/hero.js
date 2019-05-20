/**
 * TYPES
 */

export const Types = {
  ADD_REQUEST: "hero/ADD_REQUEST",
  ADD_SUCCESS: "hero/ADD_SUCCESS",
  ADD_FAILURE: "hero/ADD_FAILURE"
};

/**
 * REDUCERS
 */

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null
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
  })
};
