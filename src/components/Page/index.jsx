import React, { Component } from 'react'
import Header from '../Header'
import Gallery from '../Gallery'
import Menu from '../Menu'

class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
    }
  }

  handleSignInClick = () => {
    this.setState({
      signedIn: true
    })
  }

  handleSignOutClick = () => {
    this.setState({
      signedIn: false
    })
  }

  handleEditMenuClick = () => {

  }

  render() {
    return (
      <div className="page">
        <Header
          signedIn={this.state.signedIn}
          handleSignInClick={this.handleSignInClick}
          handleSignOutClick={this.handleSignOutClick}
          handleEditMenuClick={this.handleEditMenuClick}
        />
        <Gallery />
        <Menu />
      </div>
    )
  }
}

export default Page;
