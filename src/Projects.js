import './styles/Projects.css';

import bartr_card from './images/card-bartr.png';
import blockio_card from './images/card-blockio.png';
import site_card from './images/card-site.png';
import cubesat_card from './images/card-cubesat.jpg';
import numguess_card from './images/card-numguess.jpg';
import mirror_bot_card from './images/card-mirror-bot.jpg';

import { useEffect, useState } from 'react';

function ProjectsSection() {
	const [is_focused, set_focused] = useState(false);
	const [expanded_details, set_expanded_details] = useState({});

	const open = () => {set_focused(true)}
	const close = () => {set_focused(false)}
	const set_details = (details) => {set_expanded_details(details)}

	return (
		<div id='PROJECTS-BG'>
			<h1 className='section-title'>My Projects</h1>

			<div id='projects-container'>
				<Project {...Mirror_Bot} open={open} set_details={set_details} />
				<Project {...NumGuess} open={open} set_details={set_details} />
				<Project {...DoSBoss} open={open} set_details={set_details} />
				<Project {...Bartr} open={open} set_details={set_details} />
				<Project {...BlockIO} open={open} set_details={set_details} />
				<Project {...SelfSite} open={open} set_details={set_details} />
				{is_focused && <ExpandedProject focused={is_focused} close={close} {...expanded_details} />}
			</div>
		</div>
	);
}

function Project(props) {
	const bg = {backgroundImage: `url(${props.image})`};

	const handle_click = () => {
		const details = {
			name: props.name,
			long_description: props.long_description,
			image: props.image,
			link: props.link,
		}
		props.set_details(details)
		props.open()
	}

	return (
		<div className='project-card' style={bg} onClick={handle_click}>
			<div className='card-hover'>
				<p className='card-name'>{props.name}</p>
				<p className='card-description'>{props.description}</p>
				<h1 id='card-plus'>+</h1>
			</div>
		</div>
	);
}

function ExpandedProject(props) {
	const [focused, set_focused] = useState(false);

	//Allows fade of card to trigger before parent focus --> false
	useEffect(() => {
		if (props.focused) {set_focused(true);}
		else {set_focused(false);}
	}, [props.focused]);

	//timing to allow fade to execute
	const close = () => {
		set_focused(false);
		setTimeout(() => {
			props.close();
		}, 250);
	}

	const fade = focused ? {opacity: 1} : undefined;

	return (
		<div id='overlay' onClick={close}>
			<div id='big-card-BG' style={fade} onClick={(e)=>{e.stopPropagation();}}>
				<img id='big-card-img' src={props.image} alt={props.name} />
				<div id='big-card-details'>
					<p className='card-name'>{props.name}</p>
					<p className='card-description'>{props.long_description}</p>
				</div>
				<div id='big-card-btns'>
					<p className='big-card-btn'><a href={props.link} target='_blank' rel='noreferrer'>DETAILS</a></p>
					<p className='big-card-btn' onClick={close}>CLOSE</p>
				</div>
			</div>
		</div>
	);
}


const Bartr = {
	name: 'Bartr',
	description: 'trading app startup',
	long_description: 'A hyper-localized trading app emphasized on college life and creating a sustainable way for students to exchange goods and services.',
	image: bartr_card,
	link: 'https://www.bartr.app/',
}
const BlockIO = {
	name: 'Block.IO',
	description: 'online game',
	long_description: 'A simple online game I developed to learn websockets. Players fight to the death in a 2D polygonal battle royal shooter.',
	image: blockio_card,
	link: 'https://github.com/AdamMuzz/online-game',
}
const SelfSite = {
	name: 'Personal Website',
	description: 'web development',
	long_description: 'The site you are currently viewing; a collection of my experiences and interests tied together as a frontend project.',
	image: site_card,
	link: 'https://github.com/AdamMuzz/Personal-Site'
}
const DoSBoss = {
	name: 'The DoSS Boss',
	description: 'cybersecurity for satellites',
	long_description: 'My team\'s project for the 2022 Booz Allen Summer Games Internship. An ML embedded system for cubesats capable of detecting ping flood network attacks.',
	image: cubesat_card,
	link: 'https://www.boozallen.com/careers/university-talent/booz-allen-summer-games.html',
}
const NumGuess = {
	name: 'NumberGuesser',
	description: 'ML for digit recognition',
	long_description: 'My first venture into machine learning. It\'s an interactive canvas that allows a user to draw a number, which is used as input for an ML model to classify which digit it is seeing.',
	image: numguess_card,
	link: 'https://github.com/AdamMuzz/NumberGuesser'
}
const Mirror_Bot = {
	name: 'Mirror Bot',
	description: 'crpyto trading bot',
	long_description: 'Bot that tracks trades performed by specific crypto wallets and mirrors investments. Useful for small cap momentum trading. Implemented with Web3 and python.',
	image: mirror_bot_card,
	link: 'https://github.com/AdamMuzz/mirror_trade_bot'
}


export default ProjectsSection;