import './style/App.css';
import FilteredList from './Components/FilteredList.js';
import movieList from './MovieData';

function App() {
  return (
    <div className="App">
      <h1 className="Site-title">Movie Marathon</h1>
      <div className="Site-description">
          Looking to binge-watch some movies?
          Browse our available movies and add them to your movie marathon list. 
          We'll calculate the total time for you.
      </div>
      <FilteredList movieList={movieList} />
    </div>
  );
}

export default App;
