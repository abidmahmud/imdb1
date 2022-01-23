import React, { Component } from "react";
import Rating from "./rating.component";
import Table from "./common/table.component";
import getMovies from "../service/get-movies.service";
import getGenres from "../service/get-genres.service";
import _ from "lodash";
import Pagination from "./common/pagination.component";
import Filter from "./common/filtering.component";

class Movies extends React.Component {
    state = {
        movies: [],
        genres: [],
        sortColumn: {
            path: "id",
            order: "asc",
        },
        activePage: 1,
        pageCount: 5,
        selectedGenre: "All Genres",
    };

    componentDidMount() {
        const movies = getMovies();
        const genres = ["All  Genres", ...getGenres()];
        this.setState({ ...this.state, movies, genres });
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

    handClick = (activePage) => {
        this.setState({ ...this.state, activePage });
    }

    handClickFilter = (selectedGenre) => {
        this.setState({ ...this.state, selectedGenre });
    }

    paginateMovies = (movies) => {
        const { activePage, pageCount } = this.state;
        const start = pageCount * (activePage - 1);
        const paginatedMovies = movies.slice(start, start + pageCount);
        return paginatedMovies;
    }

    sortMovies = (movies) => {
        const { sortColumn } = this.state;
        const sortedMovies = _.orderBy(movies, [sortColumn.path], [sortColumn.order]);
        return sortedMovies;
    };

    filterMovies = () => {
        const { movies, selectedGenre } = this.state;
        movies.filter(movie => {
            if (selectedGenre === "All Genres") return true;

            if (movie.genres.includes(selectedGenre)) return true;
            return false;
        })

    }

    render() {
        
        const paginatedMovies = this.paginateMovies(this.state.movies);
        const movies = this.sortMovies(paginatedMovies);
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
            <>
                <div className="container">
                    <div className="row">
                        <Filter items={this.state.genres} selectedGenre={this.state.selectedGenre} onClickFilter={this.handClickFilter} />
                        <div className="col-lg-8">
                            <Table
                                items={movies}
                                columns={columns}
                                onSort={this.handleSort}
                                sortColumn={this.state.sortColumn}
                            />
                            <Pagination totalItems={this.state.movies.length} pageCount={this.state.pageCount} activePage={this.state.activePage} onClickPage={this.handClick} />
                        </div>
                    </div>
                </div>

            </>

        );
    }
}

export default Movies;
