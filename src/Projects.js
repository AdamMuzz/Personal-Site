import './styles/Projects.css';

import bartr_card from './images/card-bartr.png';
import blockio_card from './images/card-blockio.png';
import site_card from './images/card-site.png';
import { useState } from 'react';

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
				{is_focused && <ExpandedProject close={close} />}
			</div>
		</div>
	);
}

function Project(props) {
	const bg = {backgroundImage: `url(${props.image})`};

	return (
		<div className='project-card' style={bg} onClick={props.open}>
			<div className='card-hover'>
				<p id='card-name'>{props.name}</p>
				<p id='card-description'>{props.description}</p>
				<h1 id='card-plus'>+</h1>
			</div>
		</div>
	);
}

function ExpandedProject(props) {
	return (
		<div id='overlay' onClick={props.close}>
		<div id='big-project-BG'>
			<p>Test</p>
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