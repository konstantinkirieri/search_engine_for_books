import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './style.css';

export default class Description extends React.Component{

    static propTypes = {
        books: PropTypes.objectOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            categories: PropTypes.array,
            authors: PropTypes.array,
            description: PropTypes.string,
            imageLinks: PropTypes.string,
        })),
        itemId: PropTypes.string,
    }

    render() {
        const { itemId } = this.props;
        const { title, categories, authors, description, imageLinks } = this.props.books[itemId];

        return (
            <div className="book_container">
                <img className="book_img" src={imageLinks} alt="cover"/>
                <div className="book_content">
                    <Link to={`/`}><Button variant="contained" color="primary">Return</Button></Link>
                    <h2 className="book_title">{title}</h2>
                    <p className="book_authors">{authors.join(', ')}</p>
                    <hr/>
                    <div className="book_categories"><span>Categories:</span> {categories.join('/')}</div>
                    <div className="book_description"><span>Description:</span> {description ? description : 'No description'}</div>
                </div>
            </div>
        )
    }
}