//LANDING SECTION

import './styles/Home.css';
import GitHub_logo from './images/GitHub-64px.png';
import LinkedIn_logo from './images/LinkedIn-64px.png';
import mail_logo from './images/mail-64px.png';

function HomeSection() {
	return (
		<div id='BG'>

			<h1 id='title'>Adam Muzzarelli</h1>
			<p id='details'>Computer Scientist | Investor | Founder</p>

			<div id='glyph_container'>
				<a href='https://github.com/AdamMuzz'>
					<img className='glyph' src={GitHub_logo} alt='GitHub' />
				</a>
				<a href='https://www.linkedin.com/in/adam-muzzarelli-89ab15134/'>
					<img className='glyph' src={LinkedIn_logo} alt='LinkedIn' />
				</a>
				<a href='mailto: admuzzarelli@gmail.com'>
					<img className='glyph' src={mail_logo} alt='Mail' />
				</a>
			</div>
			
		</div>
	);
}

export default HomeSection;