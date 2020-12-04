import React from 'react';
import MovieItem from './MovieItem.js';

// Component that displays all the movies in the list prop as MovieItem components
export default class DisplayList extends React.Component {
    render() {
         // get the movie list to display and addMovie function as props
        const {list, addMovie} = this.props;
        return (
            <div>
                {list.map(item => <MovieItem movieInfo={item} addMovie={addMovie}/>)}
            </div>
        );
    }
}