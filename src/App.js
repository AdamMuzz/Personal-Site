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

			<div id='activities'>
				<p>Activites</p>
			</div>

			<ContactSection />
		</div>
	);
}

/*
	each 'section' is its own component
	need a way to link nav bar to put sections in view

	pages:
		home
		about
		projects
		activites
		contact			
 */

export default App;
