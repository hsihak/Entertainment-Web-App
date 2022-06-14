import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';

function Tv() {
  return (
    <div className='tv-section'>
      <Navbar />
      <Searchbar search={'TV series'} />
    </div>
  );
}

export default Tv;
