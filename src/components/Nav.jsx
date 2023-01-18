import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
const Nav = () => {
	const darkMode = function () {
		document.body.classList.toggle('dark');
	};
	const navToggle = function () {
		const navBar = document.querySelector('.mobile-nav');
		if (navBar.style.display == 'flex') {
			navBar.style.display = 'none';
			// navBar.classList = '';
		} else {
			navBar.style.display = 'flex';
			navBar.style.transform = 'translateY(0)';
			// navBar.classList.add('shown');
		}
	};
	function windowResize() {
		window.addEventListener('resize', () => {
			const navBar = document.querySelector('.mobile-nav');
			if (window.innerWidth >= '490') {
				navBar.style.display = 'none';
			}
		});
	}
	windowResize();
	return (
		<header>
			<div className='night-mode'>
				<div className='toggle-container'>
					<button onClick={darkMode}>
						<i className='fa-solid fa-toggle-on'></i>
					</button>
				</div>
			</div>
			<div className='main-nav'>
				<div className='fixed-container'>
					<Link to='/'>
						<h1 className='logo'>Gabriel Asdrúbal</h1>
					</Link>
					<div className='nav-toggle-container'>
						<button onClick={navToggle}>
							<i className='nav-toggle fa-solid fa-bars fa-2x'></i>
						</button>
					</div>
					<nav className='mobile-nav'>
						<ul className='primary-nav'>
							<li className='nav-link'>
								<Link to='/'>Work</Link>
							</li>
							<li className='nav-link'>
								<Link to='/'>Words</Link>
							</li>
						</ul>
						<ul className='secondary-nav'>
							<li className='nav-link'>
								<Link to='/about'>About</Link>
							</li>
							<li className='nav-link'>
								<Link to='/info'>Info</Link>
							</li>
							<li className='nav-link'>
								<Link to='/more'>...</Link>
							</li>
						</ul>
					</nav>
					<nav className='screen-nav'>
						<ul className='primary-nav'>
							<li className='nav-link'>
								<Link to='/'>Work</Link>
							</li>
							<li className='nav-link'>
								<Link to='/'>Words</Link>
							</li>
						</ul>
						<ul className='secondary-nav'>
							<li className='nav-link'>
								<Link to='/about'>About</Link>
							</li>
							<li className='nav-link'>
								<Link to='/info'>Info</Link>
							</li>
							<li className='nav-link'>
								<Link to='/more'>...</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Nav;
