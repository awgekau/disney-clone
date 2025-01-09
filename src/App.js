import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './components/LogIn';
import Header from './components/Header';
import Home from './components/Home';
import './App.css';
import Detail from './components/Detail';

function App() {
	return (
		<div>
			<Router>
				{/* <Header /> */}
				<Routes>
					{/* Use the `element` prop to specify the component */}
					<Route path="/" element={<LogIn />} />
					<Route path="/Home" element={<Home />} />
					<Route path="/detail/:id" element={<Detail />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
