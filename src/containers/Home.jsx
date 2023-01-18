import React from 'react';
import ImageGalleryItem from '../components/ImageGalleryItem';
import { projects } from '../data.js';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className='container'>
			{projects.map((project, index) => {
				return (
					<>
						<Link
							to={`/${project.url}`}
							key={index}
							className={project.col + ` img-container`}
						>
							<ImageGalleryItem
								title={project.title}
								src={project.imgs}
								key={index}
							/>
						</Link>
					</>
				);
			})}
		</div>
	);
};

export default Home;
