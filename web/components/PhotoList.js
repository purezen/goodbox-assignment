import React, { Component } from 'react'

class PhotoList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const photosForAlbum = this.props.photos.filter((photo) => photo.albumId === this.props.album.id)
                             .map((photo,i) => <a key={i} href={photo.url}><img src={photo.thumbnailUrl}/></a>)

    return (
      <div>
        <strong>Album - {this.props.album.title}</strong>
        <br/>
        {photosForAlbum}
      </div>
    )
  }
}

export default PhotoList
