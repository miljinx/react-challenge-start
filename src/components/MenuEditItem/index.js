import React from 'react'

const MenuEditItem = (props) => {
	return (
		<div className='menu-edit-item'>
		  <div className='menu-edit-item-left'>
		    <input className='title-input' type='text' value={props.title} onChange={(event) => props.handleEdit(props.id, 'title', event.target.value)}  /><br/>
		    <input className='description-input' type='text' value={props.description} onChange={(event) => props.handleEdit(props.id, 'description', event.target.value)}  />
		  </div>
		  <div className='menu-edit-item-right'>
		    <input className='price-input' type='text' value={props.price} onChange={(event) => props.handleEdit(props.id, 'price', event.target.value)}  />
		  </div>
		</div>
	)
}

export default MenuEditItem
