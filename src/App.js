import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './components/LogIn';
import Header from './components/Header';
import './App.css';

function App() {
	return (
		<div>
			<Router>
				{/* <Header /> */}
				<Routes>
					{/* Use the `element` prop to specify the component */}
					<Route path="/" element={<LogIn />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
