import React from 'react'
import GalleryItem from '../GalleryItem'

const Gallery = (props) => {
	const renderItems = props.menuItems.map(item =>
		<GalleryItem key={item.id}
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
