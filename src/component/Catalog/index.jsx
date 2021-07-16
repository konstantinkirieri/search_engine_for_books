import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Item from '../Item'

export default class Catalog extends React.Component{
    
    static propTypes = {
        books: PropTypes.objectOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            categories: PropTypes.array,
            authors: PropTypes.array,
            description: PropTypes.string,
            imageLinks: PropTypes.string,
        })),
        totalItems: PropTypes.number,
        isLoading: PropTypes.bool,
        messageError: PropTypes.string,
        showMore: PropTypes.func,
        isAdding: PropTypes.bool,
        keyword: PropTypes.string,
        category: PropTypes.string,
        relevance: PropTypes.string,
        firstIdx: PropTypes.number,
    };

    handleShowMore = () => {
        const { keyword, category, relevance, firstIdx } = this.props;
        let newFirstIdx = firstIdx + 30;
        this.props.showMore(keyword, category, relevance, newFirstIdx);
    }

    render() {
        const { books, totalItems, isLoading, messageError, isAdding } = this.props;

        if(isLoading) return <div className='circularProgress'><CircularProgress size={150} /></div>

        if(messageError) return <div className="messageError">{ messageError }</div>

        if(totalItems) { 
            return (
                <div className="catalog">
                    <div className="totalItems">Found {totalItems} results</div>
                    <div className="items">
                        {Object.entries(books).map(([key, value]) => (
                            <Link to={`/item/${key}`} key={key}>
                                <Item title={value.title} authors={value.authors} categories={value.categories[0]} imageLinks={value.imageLinks}/>
                            </Link>
                        ))}
                    </div>
                    { isAdding ? <div className='circularProgress'><CircularProgress size={50} /></div> : <Button variant="contained" color="primary" onClick={this.handleShowMore}>Load more</Button>}
                </div>
            )
        } else {
            return <div className="plug">Nothing selected</div>
        }
    }
}