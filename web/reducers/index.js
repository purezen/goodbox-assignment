import update from 'immutability-helper'

const initialState = {
  albums: [],
  photos: []
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'LOAD_ALBUMS':
      return update(state, { albums: { $set: action.albums } })
    case 'LOAD_PHOTOS':
      return update(state, { photos: { $set: action.photos } })
    default:
      return state
  }
}

export default reducer
