import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';

function Movie() {
  return (
    <div className='movie-section'>
      <Navbar />
      <Searchbar search={'movies'} />
    </div>
  );
}

export default Movie;
