import React from 'react';
import ImageGalleryItem from '../components/ImageGalleryItem';
import { projects } from '../data.js';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<main className='container'>
			{projects.map((project, index) => {
				return (
					<>
						<Link
							to={`/${project.url}`}
							key={index}
							className={project.col + ` img-container`}
						>
							<ImageGalleryItem
								title={project.url}
								src={project.imgs}
								key={project.id}
								location={project.location}
							/>
						</Link>
					</>
				);
			})}
		</main>
	);
};

export default Home;
