// Actions
export const types = {
  SET_SIDEBAR_STATE : 'tooltip-image',
};

const initialState = {};

// Reducer
const reducer = (state = initialState, action) => {

  switch (action.type) {
    case types.SET_SIDEBAR_STATE:
      state = {...state, sidebar: action.payload}
      break;
    case types.SET_ADAPTED_SIDEBAR_STATE:
      state = {...state, adapted_sidebar: action.payload}
      break;
    case types.SET_MODE:
      state = {...state, mode: action.payload}
      break;
    default: {}

  }
  return state;
};

export default reducer;

// Action Creators
export const changeSidebarState = () => {
  return (dispatch, getState) => {
    const sidebar = getState().ui.sidebar;
    const state = sidebar === 'min' ? 'max' : 'min';

    dispatch({type: types.SET_SIDEBAR_STATE, payload: state});
  }
}


export const changeAdaptedSidebarState = () => {
  return (dispatch, getState) => {
    const sidebar = getState().ui.adapted_sidebar;
    const state = sidebar === 'min' ? 'max' : 'min';

    dispatch({type: types.SET_ADAPTED_SIDEBAR_STATE, payload: state});
  }
}

export const changeUIMode = () => {
  return (dispatch, getState) => {
    const mode = getState().ui.mode;
    const state = mode === 'dark' ? '' : 'dark';

    dispatch({type: types.SET_MODE, payload: state});
  }
}