import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Card, Input, MButton, MButtonRaised } from '../../components'
import { styles } from './styles'

class Login extends Component {
  render() {
    return (
      <View style={styles.containerStl}>
        <Card>
          <Text style={styles.titleStl}>
            MyFitWay
          </Text>
          <Input placeholder="Email" value="" onChangeText={text => console.log(text)} autoFocus keyboardType="email-address" />
          <Input placeholder="Mot de passe" value="" onChangeText={text => console.log(text)} secureTextEntry onSubmitEditing={() => console.log('press')} />

          <View style={styles.signInResetWrapper}>
            <MButton onPress={() => this.props.navigation.navigate('resetPassword')} textStyle={styles.resetBtnStl}>
              <Text>Mot de passe oublié ?</Text>
            </MButton>
            <MButton onPress={() => this.props.navigation.navigate('newMember')} textStyle={styles.signInBtnStl}>
              <Text>Pas encore membre ?</Text>
            </MButton>
          </View>
          <MButtonRaised onPress={() => console.log('press')}>
            <Text>Connexion</Text>
          </MButtonRaised>
        </Card>
      </View>
    )
  }
}

export { Login }
