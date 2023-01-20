import React from 'react';
import './WordsGalleryItem.css';
import '../assets/fitty.js';

const WordsGalleryItem = ({ title, src, location, wz }) => {
	return (
		<>
			{/* <h1>{title}</h1> */}
			<img src={src} alt={title} />
			<h2 className={wz + ` sm-title`}>{title}</h2>
			<h4 className='sm-location'>{location}</h4>
			{/* <Image height={1000} width={1000} src={src} /> */}
		</>
	);
};

export default WordsGalleryItem;
