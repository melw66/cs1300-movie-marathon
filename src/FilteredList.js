import React from 'react';
import DisplayList from './DisplayList.js';
import SearchCriteria from './SearchCriteria.js';
import DisplayMarathon from './DisplayMarathon.js';
import './FilteredList.css';

export default class FilteredList extends React.Component {
    constructor() {
        super();
        this.state = {
            sortBy: "Rating",
            sortOrder: "High to Low",
            languageAll: true,
            language: {
                "English": false, 
                "Foreign": false, 
            },
            genreAll: true,
            genre: {
                "Action": false, 
                "Adventure": false, 
                "Animation": false, 
                "Biography": false, 
                "Comedy": false, 
                "Drama": false, 
                "Horror": false, 
                "Music": false, 
                "Mystery": false, 
                "Romance": false, 
                "Sci-Fi": false, 
                "Thriller": false, 
                "War": false
            }, 
            marathonMovies: [],
            totalTime: 0
        };
    }
    onCheckFilterGenre = (event) => {
        let genreCopy = {...this.state.genre};
        genreCopy[event.target.value] = !genreCopy[event.target.value];
        this.setState({
            genreAll: false,
            genre: genreCopy
        })
    }
    onCheckFilterLanguage = (event) => {
        let languageCopy = {...this.state.language};
        languageCopy[event.target.value] = !languageCopy[event.target.value];
        this.setState({
            languageAll: false,
            language: languageCopy
        })    
    }
    matchesFilter = (item) => {
        if (!this.state.languageAll) {
            if (!this.state.language[item.language]) { 
                return false;
            }
        }
        if (!this.state.genreAll) {
            for (let i = 0; i < item.genre.length; i++) {
                if (this.state.genre[item.genre[i]]) {
                    return true;
                }
            }
            return false;
        }
        return true;
    }
    onCheckSortBy = (event) => {
        const splitString = event.target.value.split(',');
        this.setState({
            sortBy: splitString[0],
            sortOrder: splitString[1].substring(1)
        })
    }
    sortByCriteria = (a, b) => {
        let itemA = (this.state.sortBy === "Rating") ? a.rating : a.year;
        let itemB = (this.state.sortBy === "Rating") ? b.rating : b.year;
        if (this.state.sortOrder === "Low to High") {
            return itemA - itemB;
        }
        return itemB - itemA;
    }
    addMovie = (movieInfo) => {
        for (let i = 0; i < this.state.marathonMovies.length; i++) {
            if (movieInfo.id === this.state.marathonMovies[i].id) {
                return;
            }
        }
        const newTotalTime = this.state.totalTime + movieInfo.duration;
        this.setState({
            marathonMovies: [...this.state.marathonMovies, movieInfo],
            totalTime: newTotalTime
        })
    }
    removeMovie = (movieInfo) => {
        let marathonMovies = [...this.state.marathonMovies];
        marathonMovies = marathonMovies.filter((item) => item.id !== movieInfo.id);
        let newTotalTime = marathonMovies.length === this.state.marathonMovies.length ? this.state.totalTime : this.state.totalTime - movieInfo.duration;
        this.setState({
            marathonMovies: marathonMovies,
            totalTime: newTotalTime
        })
    }
    setAllLanguages = () => {
        this.setState({
            languageAll: true,
            language: {
                "English": false, 
                "Foreign": false, 
            }
        })
    }
    setAllGenres = () => {
        this.setState({
            genreAll: true,
            genre: {
                "Action": false, 
                "Adventure": false, 
                "Animation": false, 
                "Biography": false, 
                "Comedy": false, 
                "Drama": false, 
                "Horror": false, 
                "Music": false, 
                "Mystery": false, 
                "Romance": false, 
                "Sci-Fi": false, 
                "Thriller": false, 
                "War": false
            }
        })
    }
    render() {
        const {movieList} = this.props;
        return (
            <div className="List-wrapper">
                <div className="Search">
                    <SearchCriteria sortRadioButtonChange={this.onCheckSortBy} genreCheckboxChange={this.onCheckFilterGenre} languageCheckboxChange={this.onCheckFilterLanguage} setAllLanguages={this.setAllLanguages} setAllGenres={this.setAllGenres} languageChecks={this.state.language} genreChecks={this.state.genre}/>
                </div>
                <div className="Movies">
                    <DisplayList list={movieList.filter(this.matchesFilter).sort(this.sortByCriteria)} addMovie={this.addMovie}/>
                </div>
                <div className="Marathon">
                    <DisplayMarathon list={this.state.marathonMovies} removeMovie={this.removeMovie} totalTime={this.state.totalTime}/>
                </div>
            </div>
        );
    }
}