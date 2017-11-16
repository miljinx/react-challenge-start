import React from 'react'

const MenuItem = (props) => {
	return (
		<div className='menu-item'>
  		<div className='menu-item-left'>
    		<div className='menu-item-title'>{props.title}</div>
    		<div className='menu-item-description'>{props.description}</div>
  		</div>
  		<div className='menu-item-right'>{props.price}</div>
		</div>
	)
}

export default MenuItem
