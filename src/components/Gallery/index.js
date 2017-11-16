import React from 'react'
import GalleryItem from '../GalleryItem'
import menuItems from '../../menu-data'

const Gallery = () => {
	const renderItems = menuItems.map((item, i) =>
		<GalleryItem key={i}
			title={item.title}
			description={item.description}
			price={item.price}
			image={item.image}
		/>
	);
	return (
		<div className='gallery'>
  		<h2>Our Fresh Meals</h2>
  		<div className='gallery-items'>
    		{renderItems}
  		</div>
		</div>
	)
}

export default Gallery
