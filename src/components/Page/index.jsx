import React, { Component } from 'react'
import menuItems from '../../menu-data'
import Header from '../Header'
import Gallery from '../Gallery'
import Menu from '../Menu'
import MenuEdit from '../MenuEdit'

class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
      editMode: false,
      menuItems: menuItems,
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
    this.setState({
      editMode: true
    })
  }

  handleEditMenuDoneClick = () => {
    this.setState({
      editMode: false
    })
  }

  handleEdit = (id, field, value) => {
		this.setState(prevState => ({
      menuItems: prevState.menuItems.map(item =>
        item.id === id
        ? {...item, [field]: value}
        : item
      )
    }))
	}

  render() {
    const viewMode = (
      <div>
        <Gallery menuItems={this.state.menuItems}/>
        <Menu menuItems={this.state.menuItems} />
      </div>
    )
    const editMode = (
      <MenuEdit
        menuItems={this.state.menuItems}
        handleEditMenuDoneClick={this.handleEditMenuDoneClick}
        handleEdit={this.handleEdit}
      />
    )

    return (
      <div className="page">
        <Header
          signedIn={this.state.signedIn}
          handleSignInClick={this.handleSignInClick}
          handleSignOutClick={this.handleSignOutClick}
          handleEditMenuClick={this.handleEditMenuClick}
        />
        {this.state.editMode ? editMode : viewMode}
      </div>
    )
  }
}

export default Page;
