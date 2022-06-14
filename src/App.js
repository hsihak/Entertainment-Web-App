import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Tv from './pages/Tv';
import Bookmark from './pages/Bookmark';

function App() {
  return (
    <div className='min-h-fit App bg-dark-blue'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie' element={<Movie />} />
        <Route path='/tv' element={<Tv />} />
        <Route path='/bookmark' element={<Bookmark />} />
      </Routes>
    </div>
  );
}

export default App;
