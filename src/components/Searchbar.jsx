import { default as SearchIcon } from '../assets/icons/icon-search.svg';

function Searchbar(props) {
  return (
    <div className='flex gap-2 px-4 py-6 search-bar'>
      <img src={SearchIcon} alt='' />
      <input
        type='search'
        onChange={event => props.onChange(event.target.value)}
        placeholder={`Search for ${props.search}`}
        className='w-screen text-white outline-none bg-dark-blue caret-white'
      />
    </div>
  );
}

export default Searchbar;
