import React, { Component } from 'react';
import Table from './table.component';

class Movies extends React.Component {
    state = {
        movies: [
            { id: 1, first_name: 'Mark', second_name: 'Otto', handle: '@otto' },
            { id: 2, first_name: 'Abid', second_name: 'Hasan', handle: '@abid' },
            { id: 3, first_name: 'Hasan', second_name: 'Mahmud', handle: '@hasan' },
        ]
    }
    render() {
        const columns = [
            { label: 'ID', path: 'id', content: item => <td>{item}</td> },
            { label: 'First Name', path: 'first_name', content: item => <td>{item}</td> },
            { label: 'Last Name', path: 'second_name', content: item => <td>{item}</td> },
            { label: 'Handle', path: 'handle', content: item => <td>{item}</td> },
        ]

        return (
            <Table data={this.state.movies} columns={columns} />
        );
    }
}

export default Movies;