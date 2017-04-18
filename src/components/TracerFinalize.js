import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, ScrollView, Modal } from 'react-native'
import TextField from 'react-native-md-textinput'
import _ from 'lodash'
import TrackDetails from './TrackDetails'
import { MButtonRaised, MButton, ModalViewYesNo } from './common'
import { Card } from './sober'
import { setTitleRecordingGeo, setDescriptionRecordingGeo } from '../redux/actions'
import { duration } from '../gpx'

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
          <TextField
            wrapperStyle={{ marginTop: -10 }}
            inputStyle={{ height: 40, lineHeight: 40, marginTop: 0 }}
            label="Titre"
            value={this.props.title}
            onChangeText={title => this.props.setTitleRecordingGeo(title)}
          />
          <TextField
            inputStyle={{ height: 40, lineHeight: 40, marginTop: 0 }}
            label="Description"
            value={this.props.description}
            onChangeText={description => this.props.setDescriptionRecordingGeo(description)}
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
            onYesPress={() => this.setState({ modalDeleteVisible: false })}
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
  { setTitleRecordingGeo, setDescriptionRecordingGeo }
)(TracerFinalize)
