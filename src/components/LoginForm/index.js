import {Component} from 'react'
import './index.css'

class LoginPage extends Component {
  state = {uname: '', passwordInput: '', errmessage: ''}

  changingUname = event => {
    this.setState({uname: event.target.value})
  }

  changingPassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  successLogin = () => {
    const {history} = this.props
    history.replace("/")
  }

  submitLogin = async event => {
    event.preventDefault()
    const {uname, passwordInput} = this.state

    if (uname === '' && passwordInput === '') {
      this.setState({errmessage: 'Username and Password are required'})
      return
    }

    if (uname === '') {
      this.setState({errmessage: 'Username is required'})
      return
    }

    if (passwordInput === '') {
      this.setState({errmessage: 'Password is required'})
      return
    }

    const userDetails = {username: uname, password: passwordInput}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.successLogin()
    } else {
      this.setState({errmessage: "Username and Password didn't match"})
    }
  }

  render() {
    const {uname, passwordInput, errmessage} = this.state
    return (
      <div className="container_loginPage">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="image_login"
          alt="website login"
        />
        <div className="part2">
          <form className="loginCard" onSubmit={this.submitLogin}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              className="websoteLogo"
              alt="website logo"
            />
            <label htmlFor="username" className="labellogin">
              USERNAME
            </label>
            <input
              type="text"
              placeholder="Username"
              className="inputelement"
              id="username"
              value={uname}
              onChange={this.changingUname}
            />
            <label htmlFor="password" className="labellogin">
              PASSWORD
            </label>
            <input
              type="password"
              placeholder="Password"
              className="inputelement"
              id="password"
              value={passwordInput}
              onChange={this.changingPassword}
            />
            <button type="submit" className="loginButton">
              Login
            </button>
            {errmessage && <p className="errmsg">{errmessage}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginPage
