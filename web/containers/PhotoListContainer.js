import {connect} from 'react-redux'
import PhotoList from '../components/PhotoList'
import * as a from '../actions'

const mapStateToProps = (state) => {
  return {
    photos: state.photos
  }
}

const PhotoListContainer = connect(
  mapStateToProps
)(PhotoList)

export default PhotoListContainer
