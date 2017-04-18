import React from 'react'
import { View, Text } from 'react-native'
import { MButton, MButtonRaised } from './'
import { Card } from '../sober'

const ModalViewYesNo = ({
  yesBtnText,
  noBtnText,
  questionText,
  onYesPress,
  onNoPress
}) => {
  return (
    <View style={styles.containerStl}>
      <Card>
        <Text>{questionText}</Text>
        <View style={styles.buttonsWrapper}>
          <MButton onPress={onNoPress}>{noBtnText || 'Non'}</MButton>
          <MButtonRaised onPress={onYesPress}>{yesBtnText || 'Oui'}</MButtonRaised>
        </View>
      </Card>
    </View>
  )
}

const styles = {
  containerStl: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center'
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
}

export { ModalViewYesNo }
