import './styles/About.css';
import headshot from './images/headshot.jpeg';

function AboutSection() {
	return (
		<div id='About-BG'>

			<h1 className='section-title'>About Me</h1>
			
			<div id='bio'>
				<img id='headshot' src={headshot} alt='HeadShot'/>
				<div>
					<p className='section-text'>
						&emsp;I'm currently a 2nd year Computer Science major at UCLA, with plans to double major in Business Economics.
						Within the realm of CS, I'm very interested in UI/UX design and AI fields.
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
						I'm currently seeking a Summer internship for computer science in Los Angeles or Bay Area (US).
						If you think I'm a good fit, please contact me via <a href='mailto: admuzzarelli@gmail.com'>admuzzarelli@gmail.com</a>.
					</p>

					<p className='subheader2'>Full Name:</p>
					<p className='section-text'>Adam Muzzarelli</p>

					<p className='subheader2'>Birth Date:</p>
					<p className='section-text'>April 20, 2002</p>

					<p className='subheader2'>Graduation:</p>
					<p className='section-text'>June 2024</p>
				</div>

				<div className='ps-wrapper'>
					<h2 className='subheader'>Skills</h2>
				</div>
			</div>

			<button>Download Resume</button>

		</div>
	);
}

export default AboutSection;