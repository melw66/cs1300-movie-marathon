import '../style/AddedMovie.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {BsClockFill} from "react-icons/bs";

export default class AddedMovie extends React.Component {
    getLengthString = (length) => {
        const hours = Math.floor(length / 60);
        const minutes = length % 60;
        return hours.toString() + ' hr ' + minutes.toString() + ' min';
    }
    getGenreString = (genres) => {
        let genreString = genres[0];
        for (let i = 1; i < genres.length; i++) {
            genreString += (', ' + genres[i]);
        }
        return genreString;
    }
    render() {
        const {movieInfo, removeMovie} = this.props;
        const nameWithYear = movieInfo.name + " (" + movieInfo.year.toString() + ")";
        const imageAltTitle = movieInfo.name + " movie poster";
        const genreString = this.getGenreString(movieInfo.genre);
        const lengthString = this.getLengthString(movieInfo.duration);
        return (
        <div className="Movie-wrapper">
            <div className="Added-movie-info">
                <img src={movieInfo.image} alt={imageAltTitle} className="Movie-poster-small"/>
            </div>
            <div className="Added-movie-synopsis">
                <h2 className="Added-movie-title">{nameWithYear}</h2>
                <div className="Added-genres">{genreString}</div>
                <div className="Tags-vertical">
                    <div className="Tag">
                        <div className="Tag-text">{lengthString}</div>
                        <BsClockFill color='#007bff' className="Tag-icon"/>
                    </div>
                </div>
                <Button variant="info" size="sm" onClick={() => removeMovie(movieInfo)}>Remove Movie</Button>
            </div>
        </div>
        );
    }
}