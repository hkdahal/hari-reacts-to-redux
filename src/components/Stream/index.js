import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Stream from './presenter'
import * as actions from '../../actions'

function mapStateToProps(state) {
  const { tracks, activeTrack } = state.track
  return {
    tracks,
    activeTrack
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onPullAudios: bindActionCreators(actions.pullAudios, dispatch),
    onPlay: bindActionCreators(actions.playTrack, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stream)