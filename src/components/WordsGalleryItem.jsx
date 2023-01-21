import React from 'react';
// import '../../node_modules/fitty/dist/fitty.min';
import './WordsGalleryItem.css';

const WordsGalleryItem = ({ title, src, location, wz, svgvalue, fw }) => {
	return (
		<>
			{/* <h1>{title}</h1> */}
			<img src={src} alt={title} />
			{/* <h2 className={wz + ` sm-title`}>{title}</h2> */}
			<svg viewBox={`0 0 ` + svgvalue + ` 16`} className={wz}>
				<text x='0' y='12' className={fw}>
					{title}
				</text>
			</svg>
			<h4 className='sm-location'>{location}</h4>
			{/* <Image height={1000} width={1000} src={src} /> */}
		</>
	);
};

export default WordsGalleryItem;
