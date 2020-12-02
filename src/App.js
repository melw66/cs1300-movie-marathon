import './App.css';
import FilteredList from './FilteredList.js';

const movieList = [
  {id: "0", name: "Parasite", image:"img/parasite.jpg", year: 2019, director: "Bong Joon Ho", rating: 8.6, duration: 132, genre: ["Comedy", "Drama", "Thriller"], language: "Foreign", synopsis: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan."},
  {id: "1", name: "Akira", image:"img/akira.jpg", year: 1988, director: "Katsuhiro Otomo", rating: 8.0, duration: 124, genre: ["Animation", "Action", "Sci-Fi"], language: "Foreign", synopsis: "A secret military project endangers Neo-Tokyo when it turns a biker gang member into a rampaging psychic psychopath who can only be stopped by two teenagers and a group of psychics."},
  {id: "2", name: "Burning", image:"img/burning.jpg", year: 2018, director: "Chang-dong Lee", rating: 7.5, duration: 148, genre: ["Drama", "Mystery"], language: "Foreign", synopsis: "Jong-su bumps into a girl who used to live in the same neighborhood, who asks him to look after her cat while she's on a trip to Africa. When back, she introduces Ben, a mysterious guy she met there, who confesses his secret hobby."},
  {id: "3", name: "Spider-Man: Into the Spider-Verse", image:"img/spiderman.jpg", year: 2018, director: "Bob Persichetti, Peter Ramsey, Rodney Rothman", rating: 8.4, duration: 117, genre: ["Animation", "Action", "Adventure"], language: "English", synopsis: "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities."},
  {id: "4", name: "Slumdog Millionaire", image:"img/slumdog.jpg", year: 2008, director: "Danny Boyle, Loveleen Tandan", rating: 8.0, duration: 120, genre: ["Drama", "Romance"], language: "English", synopsis: "A Mumbai teenager reflects on his life after being accused of cheating on the Indian version of \"Who Wants to be a Millionaire?\"."},
  {id: "5", name: "3 Idiots", image:"img/3idiots.jpg", year: 2009, director: "Rajkumar Hirani", rating: 8.4, duration: 170, genre: ["Comedy", "Drama"], language: "Foreign", synopsis: "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them \"idiots\"."},
  {id: "6", name: "Whiplash", image:"img/whiplash.jpg", year: 2014, director: "Damien Chazelle", rating: 8.5, duration: 106, genre: ["Drama", "Music"], language: "English", synopsis: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential."},
  {id: "7", name: "Persepolis", image:"img/persepolis.jpg", year: 2007, director: "Vincent Paronnaud, Marjane Satrapi", rating: 8.0, duration: 96, genre: ["Animation", "Biography", "Drama"], language: "Foreign", synopsis: "A precocious and outspoken Iranian girl grows up during the Islamic Revolution."},
  {id: "8", name: "Full Metal Jacket", image:"img/fullmetal.jpg", year: 1987, director: "Stanley Kubrick", rating: 8.3, duration: 116, genre: ["Drama", "War"], language: "English", synopsis: "A pragmatic U.S. Marine observes the dehumanizing effects the Vietnam War has on his fellow recruits from their brutal boot camp training to the bloody street fighting in Hue."},
  {id: "9", name: "Rushmore", image:"img/rushmore.jpg", year: 1998, director: "Wes Anderson", rating: 7.7, duration: 93, genre: ["Comedy", "Drama", "Romance"], language: "English", synopsis: "The extracurricular king of Rushmore Preparatory School is put on academic probation."},
  {id: "10", name: "Midsommar", image:"img/midsommar.jpg", year: 2019, director: "Ari Aster", rating: 7.1, duration: 148, genre: ["Drama", "Horror", "Mystery"], language: "English", synopsis: "A couple travels to Sweden to visit a rural hometown's fabled mid-summer festival. What begins as an idyllic retreat quickly devolves into an increasingly violent and bizarre competition at the hands of a pagan cult."},
  {id: "11", name: "Lady Bird", image:"img/ladybird.jpg", year: 2017, director: "Greta Gerwig", rating: 7.4, duration: 94, genre: ["Comedy", "Drama"], language: "English", synopsis: "In 2002, an artistically inclined seventeen-year-old girl comes of age in Sacramento, California."}
];

function App() {
  return (
    <div className="App">
      <h1>Movie Marathon</h1>
      <div className="AppWrapper">
        <FilteredList movieList={movieList} />
      </div>
    </div>
  );
}

export default App;
