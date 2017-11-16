import React from 'react'
import MenuItem from '../MenuItem'


const Menu = (props) => {
	const renderItems = props.menuItems.map(item =>
		<MenuItem key={item.id}
			title={item.title}
			description={item.description}
			price={item.price}
		/>
	);
	return (
		<div className='menu'>
  		<h2>Our Menu</h2>
  		{renderItems}
		</div>
	)
}

export default Menu
