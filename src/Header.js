//HEADER
/*
	Navigation Bar component
 */

import './Header.css';

function NavBar() {
	return (
		<div id='NavBar'>
			<NavBtn name='HOME' />
			<NavBtn name='ABOUT' />
			<NavBtn name='PROJECTS' />
			<NavBtn name='ACTIVITIES' />
			<NavBtn name='CONTACT' />
		</div>
	);
}

function NavBtn(props) {
	return (
		<div className='Btn'>
			<p>{props.name}</p>
			<hr className='underline' />
		</div>
	);
}

/*function NavBtn(props) {
	return (
		<div className='NavBtn'>
			<button>{props.name}</button>
			<hr className='underline' />
		</div>
	);
}*/

export default NavBar;