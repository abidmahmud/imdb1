import React, { Component } from 'react';

class Rating extends React.Component {
    state = {
        isHovered: false
    }

    handleHover = () => {
        this.setState({ isHovered: true })
        console.log("Hover Hoise");
    }

    handleOut = () => {
        this.setState({ isHovered: false });
    }

    getClassName = () => {
        const { isRated } = this.props;
        const { isHovered } = this.state;
        let className = isRated ? "bi bi-star-fill" : "bi bi-star";
        className += isHovered ? " text-primary " : " ";
        return className;
    }

    render() {
        const { handleToggleRating, rank } = this.props;
        return (
            <>
                <i
                    onClick={() => handleToggleRating(rank)}
                    onMouseOver={this.handleHover}
                    onMouseOut={this.handleOut}
                    className={this.getClassName()}
                ></i>
            </>
        );
    }
}

export default Rating;

