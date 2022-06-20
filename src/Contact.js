import './styles/Contact.css';
import location from './images/location-128px.png';
import mail from './images/mail-128px.png';
import linkedin from './images/LinkedIn-128px.png';

function ContactSection() {
	return (
		<div id='CONTACT-BG'>
			<h1 className='section-title'>Contact Me</h1>

			<div id='contact-options-container'>
				<div className='contact-option'>
					<img className='contact-img' src={mail} alt='Mail' />
					<h2 className='subheader'>Email me at</h2>
					<p className='contact-text'><a href='mailto: admuzzarelli@gmail.com'>admuzzarelli@gmail.com</a></p>
				</div>

				<div className='contact-option'>
					<img className='contact-img' src={linkedin} alt='LinkedIn' />
					<h2 className='subheader'>Let's connect</h2>
					<p className='contact-text'><a href='https://www.linkedin.com/in/adam-muzzarelli-89ab15134/' target='_blank' rel='noreferrer'>LinkedIn Profile</a></p>
				</div>

				<div className='contact-option'>
					<img className='contact-img' src={location} alt='Location' />
					<h2 className='subheader'>Where to find me</h2>
					<p className='contact-text'>UCLA</p>
					<p className='contact-text'>Westwood, CA</p>
					<p className='contact-text'>90024 US</p>
				</div>
			</div>
		</div>
	);
}

export default ContactSection;