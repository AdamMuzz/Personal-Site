import './styles/Projects.css';

function ProjectsSection() {
	return (
		<div id='Projects-BG'>
			<h1 className='section-title'>My Projects</h1>

			<div id='projects-container'>
				<Project name={Bartr.name} description={Bartr.description} />
				<Project name={ShooterIO.name} description={ShooterIO.description} />
				<Project name={SelfSite.name} description={SelfSite.description} />
				<Project/>
			</div>
		</div>
	);
}

function Project(props) {
	const bg = {backgroundImage: `url(${props.image})`};

	return (
		<div className='project-card' style={bg}>
			<div className='card-hover'>
				<p id='card-name'>{props.name}</p>
				<p id='card-description'>{props.description}</p>
				<h1 id='card-plus'>+</h1>
			</div>
		</div>
	);
}

const Bartr = {
	name: 'Bartr',
	description: 'trading app startup',
	image: ''
}
const ShooterIO = {
	name: 'ShooterIO',
	description: 'online game',
	image: ''
}
const SelfSite = {
	name: 'Personal Website',
	description: 'web development',
	image: ''
}

export default ProjectsSection;