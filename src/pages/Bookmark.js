import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';

function Bookmark() {
  return (
    <div className='bookmark-section '>
      <Navbar />
      <Searchbar search={'bookmarked shows'} />
    </div>
  );
}

export default Bookmark;
