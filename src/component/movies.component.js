import React, { Component } from 'react';
import Rating from './rating.component';
import Table from './common/table.component';
import getMovies from '../service/get-movies.service';
import getGenres from '../service/get-genres.service';

class Movies extends React.Component {
    state = {
        movies: [],
        genres: []
    }

    componentDidMount() {
        const movies = getMovies();
        const genres = getGenres();
        this.setState({ movies, genres });
    }

    handleToggleRating = movieRank => {
        const movies = [...this.state.movies];
        const movie = (movie => movie.id === movieRank);
        movie.your_rating = !(movie.your_rating);
        this.setState({ movies });
    }

    render() {
        const columns = [
            { label: 'Rank', path: 'id', content: (movie, key) => <td>{movie[key]}</td> },
            { label: 'Movie Name', path: 'title', content: (movie, key) => <td>{movie[key]}</td> },
            { label: 'Genre', path: 'genre', content: (movie, key) => <td>{movie[key]}</td> },
            { label: 'Poster', path: 'posterUrl', content: (movie, key) => <td><img src={movie[key]} style={{ height: "100px", width: "auto" }} /></td> },
            { label: 'Release Date', path: 'year', content: (movie, key) => <td>{movie[key]}</td> },
            { label: 'Your Rating', path: 'your_rating', content: (movie, key) => <td><Rating isRated={movie[key]} rank={movie.id} handleToggleRating={this.handleToggleRating} /></td> },
        ]

        return (
            <Table data={this.state.movies} columns={columns} />
        );
    }
}

export default Movies;