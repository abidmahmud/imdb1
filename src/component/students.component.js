import React, { Component } from 'react';
import Table from './table.component';

class Students extends React.Component {
    state = {
        students: [
            { roll: 1, name: 'Abid', cgpa: '2.82' },
            { roll: 2, name: 'Hasan', cgpa: '3.89' },
            { roll: 3, name: 'Mark', cgpa: '3.00' },
        ]
    }

    render() {
        const columns = [
            { label: 'Roll', path: 'roll', content: item => <td>{item}</td> },
            { label: 'Name', path: 'name', content: item => <td>{item}</td> },
            { label: 'CGPA', path: 'cgpa', content: item => <td>{item}</td> },
        ]
        return (
            <Table
                columns={columns}
                data={this.state.students}
            />
        );
    }
}

export default Students;