import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark justify-content-between p-4">
                <a className="navbar-brand" href="root"> IMDB </a>
            </nav>
        );
    }
}

export default Navbar;