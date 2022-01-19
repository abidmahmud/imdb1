import React, { Component } from "react";
import Rating from "./rating.component";
import Table from "./common/table.component";
import getMovies from "../service/get-movies.service";
import getGenres from "../service/get-genres.service";
import _ from "lodash";

class Movies extends React.Component {
    state = {
        movies: [],
        genres: [],
        sortColumn: {
            path: "id",
            order: "asc",
        },
    };

    componentDidMount() {
        const movies = getMovies();
        const genres = getGenres();
        this.setState({ movies, genres });
    }

    handleToggleRating = (movieRank) => {
        const movies = [...this.state.movies];
        const movie = movies.find((movie) => movie.id === movieRank);
        movie.your_rating = !movie.your_rating;
        this.setState({ movies });
    };

    handleSort = (sortColumn) => {
        this.setState({ ...this.state, sortColumn });
    };

    sortMovies = (movies) => {
        const { sortColumn } = this.state;
        const sortedMovies = _.orderBy(
            movies,
            [sortColumn.path],
            [sortColumn.order]
        );
        return sortedMovies;
    };

    render() {
        const movies = this.sortMovies(this.state.movies);
        const columns = [
            {
                label: "Rank",
                path: "id",
                sorting: true,
                content: (movie, key) => <td>{movie[key]}</td>,
            },
            {
                label: "Movie Name",
                path: "title",
                sorting: true,
                content: (movie, key) => <td>{movie[key]}</td>,
            },
            {
                label: "Genre",
                path: "genre",
                content: (movie, key) => <td>{movie[key]}</td>,
            },
            {
                label: "Poster",
                path: "posterUrl",
                sorting: true,
                content: (movie, key) => (
                    <td>
                        <img src={movie[key]} style={{ height: "100px", width: "auto" }} />
                    </td>
                ),
            },
            {
                label: "Release Date",
                path: "year",
                sorting: true,
                content: (movie, key) => <td>{movie[key]}</td>,
            },
            {
                label: "Your Rating",
                path: "your_rating",
                sorting: true,
                content: (movie, key) => (
                    <td>
                        <Rating
                            isRated={movie[key]}
                            rank={movie.id}
                            handleToggleRating={this.handleToggleRating}
                        />
                    </td>
                ),
            },
        ];

        return (
            <Table
                items={movies}
                columns={columns}
                onSort={this.handleSort}
                sortColumn={this.state.sortColumn}
            />
        );
    }
}

export default Movies;
