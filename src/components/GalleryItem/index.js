import React from 'react'

const GalleryItem = (props) => {
	return (
		<div className='gallery-item'>
  		<img className='gallery-item-image img-responsive' src={props.image}  alt={props.title}/>
  		<div className='gallery-item-title'>{props.title}</div>
  		<div className='gallery-item-description'>{props.description}</div>
  		<div id='gallery-item-price'>{props.price}</div>
		</div>
	)
}

export default GalleryItem
