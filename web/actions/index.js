import config from '../../config'

const API_ENDPOINT = `${config.API_URL}/api`

function loadAlbums(albums) {
  return {
    type: 'LOAD_ALBUMS',
    albums: albums
  }
}

function fetchAlbums() {
  return (dispatch) => {
    return fetch('http://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(json => dispatch(loadAlbums(json)))
  }
}

function loadPhotos(photos) {
  return {
    type: 'LOAD_PHOTOS',
    photos: photos
  }
}

function fetchPhotos() {
  return (dispatch) => {
    return fetch('http://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => dispatch(loadPhotos(json)))
  }
}

export function fetchDetails() {
  return (dispatch) => {
    return Promise.all([
      dispatch(fetchAlbums()),
      dispatch(fetchPhotos())
    ])
  }
}
