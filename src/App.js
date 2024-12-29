import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './components/LogIn';
import './App.css';

function App() {
	return (
		<div>
			<Router>
				<Routes>
					{/* Use the `element` prop to specify the component */}
					<Route path="/" element={<LogIn />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
