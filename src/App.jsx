import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Search from './pages/Search';
// import Help from './pages/Help';
import NotFound from './pages/NotFound';


function App() {


  
  return (
    <main>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        {/* <Route path='/help' element={<Help />} /> */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
