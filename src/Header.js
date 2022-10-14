//NAVIGATION BAR

import './styles/Header.css';

function NavBar() {
	return (
		<div id='NavBar'>
			<NavBtn name='HOME' />
			<NavBtn name='ABOUT' />
			<NavBtn name='PROJECTS' />
			{/*<NavBtn name='ACTIVITIES' />*/}
			<NavBtn name='CONTACT' />
		</div>
	);
}

function NavBtn(props) {
	const go_to = () => {
		const el = document.getElementById(`${props.name}-BG`);
		//el.scrollIntoView({behavior: 'smooth'});	//*scrolls too far down*
		const el_top = el.offsetTop - 20;
		window.scrollTo({behavior: 'smooth', top: el_top, left: 0});
	}

	return (
		<div className='Btn' onClick={go_to}>
			<p>{props.name}</p>
			<hr className='underline' />
		</div>
	);
}

export default NavBar;