import './styles/About.css';
import headshot from './images/headshot.jpeg';

function AboutSection() {
	return (
		<div id='ABOUT-BG'>

			<h1 className='section-title'>About Me</h1>
			
			<div id='bio'>
				<img id='headshot' src={headshot} alt='HeadShot'/>
				<div>
					<p className='section-text'>
						&emsp;I'm currently a 4th year student at UCLA pursuing a BS in computer science and BA in economics.
						Within the realm of CS, I'm very interested in ML/AI, economic forecasting, and UI/UX design.
					</p>
					<p className='section-text'>
						&emsp;Aside from coding, business is my passion.
						My good friend and I co-founded a startup called Bartr which is an app that aims to create a localized trading platform for college students to promote and facilitate meeting new people and other neighborly activities.
						Building a business from the ground up is an exciting and rewarding experience that I hope to incorporate into my future career, as it allows me to use my love for coding, business, and design in a productive and meaningful way.
					</p>
					<p className='section-text'>
						&emsp;Outside of academics, I'm an avid home chef, love to workout, and am a passionate retail investor.
						I especially love cooking breakfast, and consider myself in the top 1% of omelet makers worldwide.
					</p>
				</div>
			</div>

			<div id='profile-skills'>
				<div className='ps-wrapper'>
					<h2 className='subheader'>Profile</h2>

					<p className='section-text'>
						I'm currently seeking a summer internship in Los Angeles or the Bay Area (US).
						If you think I'm a good fit, please contact me via <a href='mailto: admuzzarelli@gmail.com'>admuzzarelli@gmail.com</a>.
					</p>

					<p className='subheader2'>Full Name</p>
					<p className='section-text'>Adam Muzzarelli</p>

					<p className='subheader2'>School</p>
					<p className='section-text'>University of California, Los Angeles</p>

					<p className='subheader2'>Graduation</p>
					<p className='section-text'>June 2024</p>
				</div>

				<div className='ps-wrapper'>
					<h2 className='subheader'>Skills</h2>

					<p className='subheader2'>Python</p>
					<SkillBar size={9}/>

					<p className='subheader2'>React/Javascript</p>
					<SkillBar size={9}/>

					<p className='subheader2'>C++</p>
					<SkillBar size={8}/>

					<p className='subheader2'>HTML/CSS</p>
					<SkillBar size={8}/>

					<p className='subheader2'>R</p>
					<SkillBar size={7}/>
				</div>
			</div>

			<a id='resume-download' href={process.env.PUBLIC_URL + '/Adam_Muzzarelli_Resume.pdf'} download>
			<button id='resume-btn'>Download Resume</button>
			</a>

		</div>
	);
}

function SkillBar(props) {
	return (
		<div className='skill'>
			{[...Array(props.size)].map((value, index) => (
				<div className='circle' key={index} />
			))}

			{[...Array(10 - props.size)].map((value, index) => (
				<div className='circle empty' key={index*10} />
			))}
		</div>
	);
}

export default AboutSection;