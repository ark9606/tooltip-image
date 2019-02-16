import uuid from 'uuid/v1';

// Actions
export const types = {
  INSERT_IMAGE : 'tooltip-image/insert',
};

const initialState = {};

// Reducer
const reducer = (state = initialState, action) => {

  switch (action.type) {
    case types.INSERT_IMAGE:
      const { id, image } = action.payload;
      state = {...state, [id]: image}
      break;

    default: {}

  }
  return state;
};

export default reducer;

// Action Creators
export const insertImage = (image) => {
  return (dispatch) => {
    dispatch({
      type: types.INSERT_IMAGE,
      payload: { 
        image: image, 
        id: uuid()
      }
    });
  }
}


