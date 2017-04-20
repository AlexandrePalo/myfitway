import React from 'react'
import { View, Text } from 'react-native'
import { MButton } from './'
import { Card } from '../sober'

const ModalView = ({
  btnText,
  asumptionText,
  onPress
}) => {
  return (
    <View style={styles.containerStl}>
      <Card>
        <Text>{asumptionText}</Text>
        <View style={styles.buttonsWrapper}>
          <MButton onPress={onPress}>{btnText || 'Ok'}</MButton>
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
    justifyContent: 'center'
  }
}

export { ModalView }
