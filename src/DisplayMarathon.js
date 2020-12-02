import React from 'react';
import AddedMovie from './AddedMovie.js';

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
                {list.map(item => <AddedMovie movieInfo={item} removeMovie={removeMovie}/>)}
                Total Time: {this.minutesToString(totalTime)}
            </div>
        );
    }
}