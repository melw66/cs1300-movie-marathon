import '../style/MovieItem.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsStarFill, BsClockFill, BsFillChatQuoteFill } from "react-icons/bs";

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
        const lengthString = this.getLengthString(movieInfo.duration);
        return (
        <div className="Movie-wrapper">
            <div className="Movie-info">
                <img src={movieInfo.image} alt={imageAltTitle} className="Movie-poster"/>
            </div>
            <div className="Movie-synopsis">
                <h2 className="Movie-title">{nameWithYear}</h2>
                <div className="Genres">{genreString}</div>
                <div className="Tags-horizontal">
                    <div className="Tag">
                        <div className="Tag-text">{movieInfo.rating} / 10</div>
                        <BsStarFill color='#ffc107' className="Tag-icon"/>
                    </div>
                    <div className="Tag">
                        <div className="Tag-text">{lengthString}</div>
                        <BsClockFill color='#007bff' className="Tag-icon"/>
                    </div>
                    <div className="Tag">
                        <div className="Tag-text">{movieInfo.language}</div>
                        <BsFillChatQuoteFill color='#20c997' className="Tag-icon"/>
                    </div>
                </div>
                <div className="Synopsis">{movieInfo.synopsis}</div>
                <Button variant="info" size="sm" onClick={() => addMovie(movieInfo)} className="Movie-button">Add to Movie Marathon</Button>
            </div>
        </div>
        );
    }
}