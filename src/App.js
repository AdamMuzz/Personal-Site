import './App.css';

function App() {
	return (
		<div className="App">
			<div id='home'>
				<p>Home</p>
			</div>

			<div className='spacer layer1' />

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
	idea is to have transparent nav bar @ top
		make it a sticky element in App
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
