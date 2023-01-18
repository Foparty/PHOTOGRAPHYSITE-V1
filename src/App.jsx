import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import { Home, IndividualProject } from './containers/';

function App() {
	return (
		<>
			<Nav />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/:id' element={<IndividualProject />} />
			</Routes>
		</>
	);
}

export default App;
