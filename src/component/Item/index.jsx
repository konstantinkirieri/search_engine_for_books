import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class Item extends React.Component{
    static propTypes = {
        title: PropTypes.string.isRequired,
        categories: PropTypes.string,
        author: PropTypes.array,
    }

    render() {
        const { authors, title, categories, imageLinks } = this.props;
    
        return (
            <div className="item">
                <div className="img">
                    <img src={imageLinks} alt="cover" />
                </div>
                <div className="description">
                    <div className="title">{title}</div>
                    <div className="categories">{categories}</div>
                    <div className="authors">{authors.join(', ')}</div>
                </div>
            </div>
        )
    }
}