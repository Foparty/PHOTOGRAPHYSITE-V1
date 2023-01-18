import React from 'react';

const ImageGalleryItem = ({ title, src }) => {
	return (
		<>
			{/* <h1>{title}</h1> */}
			<img src={src} alt={title} />
			{/* <Image height={1000} width={1000} src={src} /> */}
		</>
	);
};

export default ImageGalleryItem;
