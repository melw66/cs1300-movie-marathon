import React from 'react';
import AddedMovie from './AddedMovie.js';
import '../style/AddedMovie.css';

export default class DisplayMarathon extends React.Component {
    minutesToString(length) {
        const hours = Math.floor(length / 60);
        const minutes = length % 60;
        return hours.toString() + ' hr ' + minutes.toString() + ' min';
    }
    render() {
        const {list, removeMovie, totalTime} = this.props;
        return (
            <div>
                <div className="Time-accumulator">Total Time: {this.minutesToString(totalTime)}</div>
                {list.map(item => <AddedMovie movieInfo={item} removeMovie={removeMovie}/>)}
            </div>
        );
    }
}