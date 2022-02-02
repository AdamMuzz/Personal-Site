import './styles/Projects.css';

function ProjectsSection() {
	return (
		<div id='Projects-BG'>
			<h1 className='section-title'>My Projects</h1>

			<div id='projects-container'>
				<Project/>
				<Project/>
				<Project/>
				<Project/>
			</div>
		</div>
	);
}

function Project() {
	return (
		<div className='project-card'>
			<div className='card-hover'>
				<p id='card-name'>Name</p>
				<p id='card-description'>short description</p>
				<h1 id='card-plus'>+</h1>
			</div>
		</div>
	);
}

export default ProjectsSection;