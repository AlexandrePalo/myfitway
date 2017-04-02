import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import TextField from 'react-native-md-textinput'
import { emailChanged, passwordChanged, loginUser } from '../redux/actions'
import { MCard } from './common/MCard'
import { MButtonRaised } from './common/MButtonRaised'

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
        <MCard>
          <Text style={styles.errorTextStl}>
            {this.props.error}
          </Text>
          <TextField
            inputStyle={{ height: 40, lineHeight: 40, marginTop: 0 }}
            label="Email"
            value={this.props.email}
            onChangeText={email => this.props.emailChanged(email)}
          />
          <TextField
            inputStyle={{ height: 40, lineHeight: 40 }}
            label="Mot de passe"
            value={this.props.password}
            onChangeText={password => this.props.passwordChanged(password)}
            secureTextEntry
          />
          {this.renderButton()}
        </MCard>
      </View>
    )
  }
}

const styles = {
  containerStl: {
    paddingTop: 65,
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
    marginTop: 30,
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
