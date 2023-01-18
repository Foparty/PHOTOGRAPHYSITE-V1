import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../data.js';
import './IndividualProject.css';

const IndividualProject = () => {
	const [imgs, setImgs] = useState([]);
	const [text, setText] = useState('');
	const [location, setLocation] = useState('');
	const [date, setDate] = useState('');
	const [shot, setShot] = useState('');
	const [id, setId] = useState(useParams().id);

	useEffect(() => {
		for (let i = 0; i < projects.length; i++) {
			let obj = projects[i];
			if (obj.url == id) {
				setImgs(obj.imgs);
				setText(obj.text);
				setLocation(obj.location);
				setDate(obj.date);
				setShot(obj.shot);
			}
		}
	});

	return (
		<main className='individual-container'>
			{/* <div className='page-title'>{id}</div>
			<div className='project-text'>{text}</div> */}
			<img src={imgs} alt='' />
			<aside className='project-info'>
				<h1>{id}</h1>
				<p>{location}</p>
				<p>{date}</p>
				<p>{shot}</p>
			</aside>
			<aside className='project-text'>
				<p>{text}</p>
			</aside>
		</main>
	);
};

export default IndividualProject;
