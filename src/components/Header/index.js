import React from 'react'
import image from '../../images/vegies-left.jpg'
import Nav from '../Nav'

const Header = (props) => {
	return (
		<div className="header">
			<div className="header-left">
				<img className="img-responsive" src={image}></img>
			</div>
			<div className="header-right">
				<div className="header-titles">
					<h1>Wholesome Foods</h1>
					<h2>Delicious meals made with locally sourced organic ingredients</h2>
				</div>
				<Nav
					signedIn={props.signedIn}
					handleSignInClick={props.handleSignInClick}
					handleSignOutClick={props.handleSignOutClick}
					handleEditMenuClick={props.handleEditMenuClick}
				/>
			</div>
		</div>
	)
}

export default Header
