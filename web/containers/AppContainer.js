import {connect} from 'react-redux'
import App from '../components/App'
import * as a from '../actions'

const mapStateToProps = (state) => {
  return {
    albums: state.albums
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadDetails: () => {
      dispatch(a.fetchDetails())
    }
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
