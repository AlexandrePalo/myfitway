import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { Button, Item, Content, Input, Label, Container } from 'native-base'
import { emailChanged, passwordChanged, loginUser } from '../redux/actions'
import { Spinner } from './common'

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
      <Button onPress={this.onButtonPress.bind(this)} block success>
        <Text>Connexion</Text>
      </Button>
    )
  }

  render() {
    return (
      <Container style={{ paddingTop: 62 }}>
        <Content>
            <Item>
              <Label>Email</Label>
              <Input
                label="Email"
                value={this.props.email}
                onChangeText={email => this.props.emailChanged(email)}
                placeholder="a.palo@gmail.com"
              />
            </Item>
            <Item>
              <Label>Mot de passe</Label>
              <Input
                label="Mot de passe"
                value={this.props.password}
                onChangeText={password => this.props.passwordChanged(password)}
                placeholder="password"
                secureTextEntry
              />
            </Item>
            {() => {
              if (this.props.error) {
                return (
                  <Item>
                    <Text style={styles.errorTextStl}>
                      {this.props.error}
                    </Text>
                  </Item>
                )
              }
            }}
            <Item>
              {this.renderButton()}
            </Item>
        </Content>
      </Container>
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
