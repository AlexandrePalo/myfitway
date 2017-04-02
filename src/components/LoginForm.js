import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from '../redux/actions'
import { Card, CardSection, Button, Input, Spinner } from './common'

class LoginForm extends Component {

  onButtonPress() {
    const { email, password } = this.props
    this.props.loginUser(email, password)
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="small" />
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Connexion
      </Button>
    )
  }

  render() {
    return (
      <View style={styles.containerStl}>
        <Card>
          <CardSection>
            <Input
              label="Email"
              value={this.props.email}
              onChangeText={email => this.props.emailChanged(email)}
              placeholder="a.palo@gmail.com"
            />
          </CardSection>
          <CardSection>
            <Input
              label="Mot de passe"
              value={this.props.password}
              onChangeText={password => this.props.passwordChanged(password)}
              placeholder="password"
              secureTextEntry
            />
          </CardSection>
          <Text style={styles.errorTextStl}>
            {this.props.error}
          </Text>
          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
      </View>
    )
  }
}

const styles = {
  containerStl: {
    paddingTop: 65
  },
  errorTextStl: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
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
