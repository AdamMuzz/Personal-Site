//MAIN PAGE
/*
	react component that represents the overall website
 */

import './styles/App.css';
import Header from './Header';
import HomeSection from './Home';
import AboutSection from './About';

function App() {
	return (
		<div className='App'>
			<Header />

			<HomeSection />
			<div className='spacer break1' />

			<AboutSection />
			<div className='spacer break2' />

			<div id='projects'>
				<p>Projects</p>
			</div>

			<div id='activities'>
				<p>Activites</p>
			</div>

			<div id='contact'>
				<p>Contact</p>
			</div>
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
