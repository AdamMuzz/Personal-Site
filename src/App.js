//MAIN PAGE
/*
	react component that represents the overall website
 */

import './styles/App.css';
import Header from './Header';
import HomeSection from './Home';
import AboutSection from './About';
import ProjectsSection from './Projects';
import ContactSection from './Contact';

function App() {
	return (
		<div className='App'>
			<Header />

			<HomeSection />
			<div className='spacer break1' />

			<AboutSection />
			<div className='spacer break2' />

			<ProjectsSection />
			<div className='spacer break3' />

			{/*<div id='ACTIVITIES-BG'>
				<p>Activites</p>
			</div>*/}

			<ContactSection />
		</div>
	);
}

/*
	each 'section' is its own component

	pages:
		home
		about
		projects
		activites
		contact		
		
	TODO:
		make all imgs 128px and fix that
 */

export default App;
