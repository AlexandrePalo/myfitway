import React, { Component } from 'react'
import { View, Text, ToastAndroid, Modal } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { MButtonRaised, ModalView } from '../common'
import { Card, Input } from '../sober'
import {
  emailSignInChanged,
  passwordSignInChanged,
  passwordConfirmationSignInChanged,
  createUser,
  errorPasswordSignIn,
  createUserReset
} from '../../redux/actions'

class SignInForm extends Component {

  state = {
    modalVisible: false
  }

  componentDidUpdate() {
    if (this.props.error) {
      ToastAndroid.show(this.props.error, ToastAndroid.SHORT)
    }
  }

  onButtonPress() {
    const { email, password, passwordConfirmation } = this.props
    if (password !== passwordConfirmation) {
      this.props.errorPasswordSignIn()
    } else {
      this.props.createUser(email, password)
    }
  }

  renderButton() {
    if (this.props.loading) {
      return (
      <View style={styles.buttonWrapper}>
        <MButtonRaised disabled loading onPress={this.onButtonPress.bind(this)} />
      </View>
      )
    }
    if (this.props.success) {
      if (!this.state.modalVisible) {
        this.props.createUserReset()
        this.setState({ modalVisible: true })
      }
    }
    return (
      <View style={styles.buttonWrapper}>
        <MButtonRaised onPress={this.onButtonPress.bind(this)}>
          <Text>C'est parti !</Text>
        </MButtonRaised>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.containerStl}>
        <Card>
          <Input
            placeholder="Email"
            value={this.props.email}
            onChangeText={email => this.props.emailSignInChanged(email)}
          />
          <Input
            placeholder="Mot de passe"
            value={this.props.password}
            onChangeText={password => this.props.passwordSignInChanged(password)}
            secureTextEntry
          />
          <Input
            placeholder="Confirmation du mot de passe"
            value={this.props.passwordConfirmation}
            onChangeText={password => this.props.passwordConfirmationSignInChanged(password)}
            secureTextEntry
          />
          {this.renderButton()}
        </Card>
        <Modal
          animationType='slide'
          transparent
          visible={this.state.modalVisible}
          onRequestClose={() => Actions.login({ type: 'reset' })}
        >
          <ModalView
            asumptionText='Votre compte est créé, vous pouvez désormais vous connecter !'
            onPress={() => {
              this.setState({ modalVisible: false })
              Actions.login({ type: 'reset' })
            }}
          />
        </Modal>
      </View>
    )
  }
}

const styles = {
  containerStl: {
    paddingTop: 56,
    backgroundColor: '#f5f5f5',
    flex: 1
  },
  buttonWrapper: {
    marginTop: 10,
    marginBottom: 10
  }
}

const mapStateToProps = (state) => {
  const { email, password, passwordConfirmation, loading, error, success } = state.signIn
  return {
    email,
    password,
    passwordConfirmation,
    loading,
    error,
    success
  }
}

export default connect(
  mapStateToProps,
  {
    emailSignInChanged,
    passwordSignInChanged,
    passwordConfirmationSignInChanged,
    createUser,
    errorPasswordSignIn,
    createUserReset
  }
)(SignInForm)
