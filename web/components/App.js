import React, { Component } from 'react'
import PhotoListContainer from '../containers/PhotoListContainer'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.loadDetails()
  }

  render() {
    const list = this.props.albums.map((album,i) => <div key={i}><PhotoListContainer album={album} /></div>)

    return (
      <div>
        <h4>Photo Gallery</h4>
        {list}
      </div>
    )
  }
}

export default App
