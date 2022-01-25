//MAIN PAGE
/*
	react component that represents the overall website
 */

import './styles/App.css';
import Header from './Header';
import HomeSection from './Home';

function App() {
	return (
		<div className='App'>
			<Header />
			<HomeSection />

			<div className='spacer break1' />

			<div id='about'>
				<p>About</p>
			</div>

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
