import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../container/Header';

export default class Layout extends React.Component {

    static propTypes = {
        itemId: PropTypes.string,
    };

    render () {
        return (
            <>
                <h1>{this.props.itemId}</h1>
                <Header/>
                {this.props.children}
            </>
        )
    }
}