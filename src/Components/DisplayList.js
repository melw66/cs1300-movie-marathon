import React from 'react';
import MovieItem from './MovieItem.js';

export default class DisplayList extends React.Component {
    render() {
        const {list, addMovie} = this.props;
        return (
            <div>
                {list.map(item => <MovieItem movieInfo={item} addMovie={addMovie}/>)}
            </div>
        );
    }
}