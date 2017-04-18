import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { emailChanged, passwordChanged, loginUser } from '../redux/actions'
import { Card, Input } from './sober'
import { MButtonRaised, MButton } from './common'

class LoginForm extends Component {

  onButtonPress() {
    const { email, password } = this.props
    this.props.loginUser(email, password)
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
          <Text>Connexion</Text>
        </MButtonRaised>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.containerStl}>
        <Card>
          <Text style={styles.titleStl}>
            MyFitWay
          </Text>
          <Text style={styles.errorTextStl}>
            {this.props.error}
          </Text>
          <Input
            placeholder="Email"
            value={this.props.email}
            onChangeText={email => this.props.emailChanged(email)}
          />
          <Input
            placeholder="Mot de passe"
            value={this.props.password}
            onChangeText={password => this.props.passwordChanged(password)}
            secureTextEntry
          />

          <View style={styles.signInResetWrapper}>
            <MButton
              onPress={() => Actions.resetPassword()}
              textStyle={styles.resetBtnStl}
            >
              <Text>Mot de passe oublié ?</Text>
            </MButton>
            <MButton
              onPress={() => Actions.signIn()}
              textStyle={styles.signInBtnStl}
            >
              <Text>Pas encore membre ?</Text>
            </MButton>
          </View>
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
  titleStl: {
    alignSelf: 'center',
    fontSize: 30,
    color: '#000',
    opacity: 0.87
  },
  errorTextStl: {
    marginTop: 10,
    fontSize: 16,
    alignSelf: 'center',
    color: 'red'
  },
  signInResetWrapper: {
    marginTop: 30,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  signInBtnStl: {
    fontSize: 12
  },
  resetBtnStl: {
    fontSize: 12
  },
  buttonWrapper: {
    marginTop: 10,
    marginBottom: 10
  }
}

const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
  loading: state.auth.loading,
  user: state.auth.user,
  error: state.auth.error
})

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged, loginUser }
)(LoginForm)
