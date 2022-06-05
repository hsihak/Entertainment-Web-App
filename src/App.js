import './App.css';
import Header from './components/Header/Header.component';
import Search from './components/Search/Search.component';
import Trending from './components/Trending/Trending.component';

function App() {
  return (
    <div className='App font-outfit'>
      <Header />
      <div className='main bg-dark-blue max-h-full'>
        <Search />
        <Trending />
      </div>
    </div>
  );
}

export default App;
