import React, { Component } from 'react';
import Rating from './rating.component';
import Table from './common/table.component';

class Movies extends React.Component {
    state = {
        movies: [
            { rank: 1, movie_name: 'The Shawshank Redemption', imdb_rating: '9.2', release_date: '1994', your_rating: true },
            { rank: 2, movie_name: 'The Godfather', imdb_rating: '9.1', release_date: '1972', your_rating: false },
            { rank: 3, movie_name: 'The Shawshank: PartII', imdb_rating: '9.0', release_date: '1974', your_rating: false },
            { rank: 4, movie_name: 'The Dark Knight', imdb_rating: '9.0', release_date: '2008', your_rating: true },
            { rank: 5, movie_name: '12 Angry Man', imdb_rating: '8.9', release_date: '1957', your_rating: false },
        ]
    }

    handleToggleRating = movieRank => {
        const movies = [...this.state.movies];
        const movie = movies.find(movie => movie.rank === movieRank);
        movie.your_rating = !(movie.your_rating);
        this.setState({ movies });
    }

    render() {
        const columns = [
            { label: 'Rank', path: 'rank', content: (movie, key) => <td>{movie[key]}</td> },
            { label: 'Movie Name', path: 'movie_name', content: (movie, key) => <td>{movie[key]}</td> },
            { label: 'Imdb_Rating', path: 'imdb_rating', content: (movie, key) => <td>{movie[key]}</td> },
            { label: 'Release Date', path: 'release_date', content: (movie, key) => <td>{movie[key]}</td> },
            { label: 'Your Rating', path: 'your_rating', content: (movie, key) => <td><Rating isRated={movie[key]} rank={movie.rank} handleToggleRating={this.handleToggleRating} /></td> },
        ]

        return (
            <Table data={this.state.movies} columns={columns} />
        );
    }
}

export default Movies;