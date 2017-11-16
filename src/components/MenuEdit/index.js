import React from 'react'
import MenuEditItem from '../MenuEditItem'

const MenuEdit = (props) => {
	const renderItems = props.menuItems.map(item =>
		<MenuEditItem key={item.id}
			id={item.id}
			title={item.title}
			description={item.description}
			price={item.price}
			handleEdit={props.handleEdit}
		/>
	)
	return (
		<div className='menu-edit'>
			<h2>Our Menu</h2>
			{renderItems}
			<button className='button menu-edit-done'
				onClick={props.handleEditMenuDoneClick}
				>Done</button>
		</div>
	)
}

export default MenuEdit
