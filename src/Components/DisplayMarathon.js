import React from 'react';
import AddedMovie from './AddedMovie.js';
import '../style/AddedMovie.css';

// Component that displays all the movies in the list prop (user's chosen movies) as AddedMovie components
// Also displays the passed in total time the movies are as a whole
export default class DisplayMarathon extends React.Component {
    // given number of minutes, returns it as a string formatted like "X hr X min"
    minutesToString(length) {
        const hours = Math.floor(length / 60);
        const minutes = length % 60;
        return hours.toString() + ' hr ' + minutes.toString() + ' min';
    }
    render() {
        // get the movie list, removeMovie function, and total minutes of movies in list as props
        const {list, removeMovie, totalTime} = this.props;
        return (
            <div>
                <div className="Time-accumulator">Total Time: {this.minutesToString(totalTime)}</div>
                {list.map(item => <AddedMovie movieInfo={item} removeMovie={removeMovie}/>)}
            </div>
        );
    }
}