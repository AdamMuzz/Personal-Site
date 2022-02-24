import './styles/Projects.css';

import bartr_card from './images/card-bartr.png';
import blockio_card from './images/card-blockio.png';
import site_card from './images/card-site.png';
import { useEffect, useState } from 'react';

function ProjectsSection() {
	const [is_focused, set_focused] = useState(false);

	const open = () => {set_focused(true)}
	const close = () => {set_focused(false)}

	return (
		<div id='Projects-BG'>
			<h1 className='section-title'>My Projects</h1>

			<div id='projects-container'>
				<Project {...Bartr} open={open} />
				<Project {...BlockIO} open={open} />
				<Project {...SelfSite} open={open} />
				{is_focused && <ExpandedProject focused={is_focused} close={close} />}
			</div>
		</div>
	);
}

function Project(props) {
	const bg = {backgroundImage: `url(${props.image})`};

	return (
		<div className='project-card' style={bg} onClick={props.open}>
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

	useEffect(() => {
		if (props.focused) {set_focused(true);}
		else {set_focused(false);}
	}, [props.focused]);

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
				<div id='big-card-img'>IMAGE</div>
				<div id='big-card-details'>
					<p className='card-name'>TITLE</p>
					<p className='card-description'>DESCRIPTION</p>
				</div>
				<div id='big-card-btns'>
					<p className='big-card-btn'>DETAILS</p>
					<p className='big-card-btn' onClick={close}>CLOSE</p>
				</div>
			</div>
		</div>
	);
}


const Bartr = {
	name: 'Bartr',
	description: 'trading app startup',
	image: bartr_card,
}
const BlockIO = {
	name: 'Block.IO',
	description: 'online game',
	image: blockio_card,
}
const SelfSite = {
	name: 'Personal Website',
	description: 'web development',
	image: site_card,
}



export default ProjectsSection;