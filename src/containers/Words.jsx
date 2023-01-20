import React from 'react';
import WordsGalleryItem from '../components/WordsGalleryItem';
import { projects } from '../data.js';
import { Link } from 'react-router-dom';

const Words = () => {
	return (
		<main className='container'>
			{projects.map((project, index) => {
				return (
					<>
						<Link
							to={`/${project.url}`}
							key={project.id}
							className={project.col + ` img-container`}
						>
							<WordsGalleryItem
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

export default Words;
