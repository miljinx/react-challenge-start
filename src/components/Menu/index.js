import React from 'react'
import MenuItem from '../MenuItem'
import menuItems from '../../menu-data'


const Menu = () => {
	const renderItems = menuItems.map((item, i) =>
		<MenuItem key={i}
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
