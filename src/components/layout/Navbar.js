import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const toggleHamburger = () => {
		document.querySelector("#hamburger-menu").classList.toggle("open");
	};
	return (
		<div id="Navbar">
			<div className="title">The Potter Codex</div>
			<div className="navigation">
				<ul className="main-nav">
					<li><Link to='/'>Home</Link></li>
					<li><Link to='/Characters'>Characters</Link></li>
					<li><Link to='/Spells'>Spells</Link></li>
					<li><Link to='/SortingHat'>Sorting Hat</Link></li>
				</ul>
			</div>
			<div className="hamburger-container" onClick={toggleHamburger}>
				<img src="hamburger.svg" alt="hamburger menu icon" />
				<div id="hamburger-menu">
					<div id="close-hamburger-menu">X</div>
					<ul>
						<li><Link to='/'>Home</Link></li>
						<li><Link to='/Characters'>Characters</Link></li>
						<li><Link to='/Spells'>Spells</Link></li>
						<li><Link to='/SortingHat'>Sorting Hat</Link></li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
