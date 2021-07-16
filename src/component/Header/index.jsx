import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import './style.css'

export default class Header extends React.Component{

    static propTypes = {
        searchBooks: PropTypes.func.isRequired
    }

    state = {
        keyword: '',
        category: '',
        relevance: 'relevance',
        key: 'AIzaSyBCe32QXvsSFgROEe1_8Ak5FkuvLAIdbqM',
        firstIdx: 1
    }

    handleChangeKeyword = (event) => {
        this.setState(
            {
                keyword: event.target.value
            }
        )
    }
    handleChangeCategory = (event) => {
        this.setState(
            {
                category: event.target.value
            }
        )
    }
    handleChangeRelevance = (event) => {
        this.setState(
            {
                relevance: event.target.value
            }
        )
    }
    handleKeyUp = (event) => {
        if(event.keyCode == 13) {
            this.handleSearch();
        }
    }
    handleSearch = () => {
            const { keyword, category, relevance, firstIdx } = this.state;
            keyword ? this.props.searchBooks(keyword, category, relevance, firstIdx) : alert('Enter your request');
    }

    render() {
        const { keyword, category, relevance } = this.state;
        return (
            <header>
                <div className="container">
                    <h1>BOOKS</h1>
                    <div className="search">
                        <TextField id="filled-basic" label="Keyword" variant="filled"
                            value={keyword}
                            onChange={this.handleChangeKeyword}
                            onKeyUp={this.handleKeyUp} />
                        <Button variant="contained" color="primary" onClick={this.handleSearch}>Search</Button>
                    </div>
                    <div className="selects">
                        <FormControl className="select">
                            <Select displayEmpty id="select" value={category} onChange={this.handleChangeCategory}>
                                <MenuItem value="">all</MenuItem>
                                <MenuItem value="art">art</MenuItem>
                                <MenuItem value="biography">biography</MenuItem>
                                <MenuItem value="computers">computers</MenuItem>
                                <MenuItem value="history">history</MenuItem>
                                <MenuItem value="medical">medical</MenuItem>
                                <MenuItem value="poetry">poetry</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className="select">
                            <Select id="select" value={relevance} onChange={this.handleChangeRelevance}>
                                <MenuItem value="relevance">relevance</MenuItem>
                                <MenuItem value="newest">newest</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
            </header>
        )
    }
}