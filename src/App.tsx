import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router basename='/new-portfolio'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
