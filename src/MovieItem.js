import './MovieItem.css';
import React from 'react';
import Button from 'react-bootstrap/Button';

export default class MovieItem extends React.Component {
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
        const {movieInfo, addMovie} = this.props;
        const nameWithYear = movieInfo.name + " (" + movieInfo.year.toString() + ")";
        const imageAltTitle = movieInfo.name + " movie poster";
        const genreString = this.getGenreString(movieInfo.genre);
        const directorString = "Directed by: " + movieInfo.director;
        const lengthString = "Length: " + this.getLengthString(movieInfo.duration);
        return (
        // <div style={divstyle} onClick={() => updateCart(id)}>
        <div className="Movie-item-wrapper">
            <div className="Movie-info">
                <h2>{nameWithYear}</h2>
                <img src={movieInfo.image} alt={imageAltTitle}/>
                <p>{directorString}</p>
                <p>{lengthString}</p>
            </div>
            <div className="Movie-synopsis">
                <p>{movieInfo.rating}</p>
                <p>{genreString}</p>
                <p>{movieInfo.synopsis}</p>
                <Button variant="primary" size="sm" onClick={() => addMovie(movieInfo)}>Add to Movie Marathon</Button>
            </div>
        </div>
        );
    }
}