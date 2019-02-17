import uuid from 'uuid/v1';

// Actions
export const types = {
  INSERT_IMAGE : 'tooltip-image/images/insert',
  EDIT_IMAGE : 'tooltip-image/images/edit',
  DELETE_IMAGE : 'tooltip-image/images/delete',
};

const initialState = {};

// Reducer
const reducer = (state = initialState, action) => {

  switch (action.type) {
    case types.INSERT_IMAGE: {
      const { id, image } = action.payload;
      state = {...state, [id]: image};
      break;
    }

    case types.DELETE_IMAGE: {
      const copy = {...state};
      delete copy[action.payload.id];
      state = copy;
      break;
    }

    case types.EDIT_IMAGE: {
      const { id, ...rest } = action.payload;
     
      const copy = {...state};
      copy[id] = rest;
      state = copy;
      break;
    }

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

export const deleteImage = (imageId) => {
  return (dispatch) => {


    dispatch({
      type: types.DELETE_IMAGE,
      payload: { 
        id: imageId
      }
    });
  }
}

// Action Creators
export const editImage = (params) => {
  return (dispatch) => {


    dispatch({
      type: types.EDIT_IMAGE,
      payload: params
    });
  }
}



export const MAX_SIZE = 4; //Mb



// Selectors
// convert object of images to array
export const mapImageObjectToArray = obj => Object.keys(obj).map(key => ({ key, ...obj[key]}));


