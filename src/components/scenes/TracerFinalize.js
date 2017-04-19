import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, ScrollView, Modal } from 'react-native'
import { Actions } from 'react-native-router-flux'
import _ from 'lodash'
import TrackDetails from '../common/TrackDetails'
import { MButtonRaised, MButton, ModalViewYesNo } from '../common'
import { Card, Input } from '../sober'
import { setTitleRecordingGeo, setDescriptionRecordingGeo, resetRecordingGeo } from '../../redux/actions'
import { duration } from '../../gpx'

class TracerFinalize extends Component {

  state = {
    modalDeleteVisible: false
  }

  render() {
    const { trkpts, stepDown, stepUp } = this.props
    return (
      <ScrollView style={{ marginTop: 50, paddingBottom: 5 }}>
        <TrackDetails
          trkpts={trkpts}
          duration={duration(trkpts)}
          distance={_.last(trkpts).distance}
          stepUp={stepUp}
          stepDown={stepDown}
        />
        <Card>
          <Input
            placeholder="Titre"
            onChangeText={title => this.props.setTitleRecordingGeo(title)}
            value={this.props.title}
          />
          <Input
            placeholder="Description"
            onChangeText={description => this.props.setDescriptionRecordingGeo(description)}
            value={this.props.description}
          />
          <View style={styles.cancelSaveWrapper}>
            <MButton
              style={{ flex: 2 }}
              onPress={() => {
                this.setState({ modalDeleteVisible: true })
              }}
            >
              Annuler
            </MButton>
            <MButtonRaised
              style={{ flex: 2 }}
              onPress={() => console.log('save')}
            >
              Enregistrer
            </MButtonRaised>
          </View>
        </Card>


        <Modal
          animationType={'slide'}
          transparent
          visible={this.state.modalDeleteVisible}
          onRequestClose={() => true}
        >
          <ModalViewYesNo
            questionText='Etes-vous sûr de vouloir supprimer le tracé ? Il ne sera plus disponible par la suite.'
            onNoPress={() => this.setState({ modalDeleteVisible: false })}
            onYesPress={() => {
              this.props.resetRecordingGeo()
              this.setState({ modalDeleteVisible: false })
              Actions.welcome({ type: 'reset' })
            }}
          />
        </Modal>

      </ScrollView>
    )
  }
}

const styles = {
  cancelSaveWrapper: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
}

const mapStateToProps = (state) => ({
  trkpts: state.geolocation.recording.trkpts,
  title: state.geolocation.recording.title,
  description: state.geolocation.recording.description,
  averageSpeed: state.geolocation.recording.averageSpeed,
  stepUp: state.geolocation.recording.stepUp,
  stepDown: state.geolocation.recording.stepDown,
  sending: state.geolocation.recording.sending
})

export default connect(
  mapStateToProps,
  { setTitleRecordingGeo, setDescriptionRecordingGeo, resetRecordingGeo }
)(TracerFinalize)
