import { Route, Routes } from 'react-router-dom';
import './Layout.css';
import Nav from './components/Nav';
import {
	Home,
	IndividualProject,
	About,
	ContactInfo,
	More,
	Words,
	NotFound,
} from './containers/';

function App() {
	return (
		<>
			<Nav />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/words' element={<Words />} />
				<Route path='/:id' element={<IndividualProject />} />
				<Route path='/about' element={<About />} />
				<Route path='/info' element={<ContactInfo />} />
				<Route path='/more' element={<More />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
