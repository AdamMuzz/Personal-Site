import './styles/Projects.css';

import bartr_card from './images/card-bartr.png';
import blockio_card from './images/card-blockio.png';
import site_card from './images/card-site.png';
import { useState } from 'react';

function ProjectsSection() {
	const [is_focused, set_focused] = useState(false);
	const show_overlay = is_focused ? {display: 'block'} : {display: 'none'}

	return (
		<div id='Projects-BG'>
			<h1 className='section-title'>My Projects</h1>

			<div id='projects-container'>
				<Project {...Bartr} focused={set_focused} />
				<Project {...BlockIO} focused={set_focused} />
				<Project {...SelfSite} focused={set_focused} />
				{is_focused && <ExpandedProject />}
			</div>

			<div id='overlay' style={show_overlay} onClick={()=>{set_focused(false)}} />
		</div>
	);
}

function Project(props) {
	const bg = {backgroundImage: `url(${props.image})`};

	const handle_click = () => {
		props.focused(true);
	}

	return (
		<div className='project-card' style={bg} onClick={handle_click}>
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
		<div id='big-project-BG'>
			<p>Test</p>
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