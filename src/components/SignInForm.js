import React, { Component } from 'react'
import { View, Text } from 'react-native'
import TextField from 'react-native-md-textinput'
import { connect } from 'react-redux'
import { MButtonRaised } from './common'
import { Card } from './sober'
import {
  emailSignInChanged,
  passwordSignInChanged,
  passwordConfirmationSignInChanged,
  createUser,
  errorPasswordSignIn
} from '../redux/actions'

class SignInForm extends Component {

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
          <Text style={styles.errorTextStl}>
            {this.props.error}
          </Text>
          <TextField
            inputStyle={{ height: 40, lineHeight: 40, marginTop: 0 }}
            label="Email"
            value={this.props.email}
            onChangeText={email => this.props.emailSignInChanged(email)}
          />
          <TextField
            inputStyle={{ height: 40, lineHeight: 40 }}
            label="Mot de passe"
            value={this.props.password}
            onChangeText={password => this.props.passwordSignInChanged(password)}
            secureTextEntry
          />
          <TextField
            inputStyle={{ height: 40, lineHeight: 40 }}
            label="Confirmation"
            value={this.props.passwordConfirmation}
            onChangeText={password => this.props.passwordConfirmationSignInChanged(password)}
            secureTextEntry
          />
          {this.renderButton()}
        </Card>
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
  errorTextStl: {
    marginTop: 10,
    fontSize: 16,
    alignSelf: 'center',
    color: 'red'
  },
  buttonWrapper: {
    marginTop: 10,
    marginBottom: 10
  }
}

const mapStateToProps = (state) => ({
  email: state.signIn.email,
  password: state.signIn.password,
  passwordConfirmation: state.signIn.passwordConfirmation,
  loading: state.signIn.loading,
  error: state.signIn.error
})

export default connect(
  mapStateToProps,
  {
    emailSignInChanged,
    passwordSignInChanged,
    passwordConfirmationSignInChanged,
    createUser,
    errorPasswordSignIn
  }
)(SignInForm)
