import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import {
	Home,
	IndividualProject,
	About,
	ContactInfo,
	More,
} from './containers/';

function App() {
	return (
		<>
			<Nav />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/:id' element={<IndividualProject />} />
				<Route path='/about' element={<About />} />
				<Route path='/info' element={<ContactInfo />} />
				<Route path='/more' element={<More />} />
			</Routes>
		</>
	);
}

export default App;
