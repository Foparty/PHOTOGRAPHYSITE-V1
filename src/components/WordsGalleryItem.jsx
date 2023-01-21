import React from 'react';
// import '../../node_modules/fitty/dist/fitty.min';
import './WordsGalleryItem.css';

const WordsGalleryItem = ({ title, src, location, wz }) => {
	return (
		<>
			{/* <h1>{title}</h1> */}
			<img src={src} alt={title} />
			{/* <h2 className={wz + ` sm-title`}>{title}</h2> */}
			<svg viewBox='0 0 150 16'>
				<text x='0' y='15'>
					{title}
				</text>
			</svg>
			<h4 className='sm-location'>{location}</h4>
			{/* <Image height={1000} width={1000} src={src} /> */}
		</>
	);
};

export default WordsGalleryItem;
