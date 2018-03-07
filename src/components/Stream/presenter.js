import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Stream extends Component {
  componentDidUpdate() {
    const audioElement = ReactDOM.findDOMNode(this.refs.audio)
    if (!audioElement) {
      return
    }
    const {activeTrack} = this.props

    if (activeTrack) {
      audioElement.play()
    } else {
      audioElement.pause()
    }
  }

  render() {
    const {tracks = [], onPullAudios, activeTrack, onPlay} = this.props;
    return (
      <div>
        <div>
          <button onClick={onPullAudios} type="button">Pull Audios</button>
        </div>
        <div>
          {tracks.map((track, key) => {
            return (
              <div className="track" key={key}>
                {track.title}
                <button type="button" onClick={() => onPlay(track)}>Play</button>
              </div>
            )
          })}
        </div>
        {
          activeTrack ?
            <audio id="audio" ref="audio" src={`${activeTrack.audio_url}`}></audio> : null
        }
      </div>
    )
  }
}

export default Stream