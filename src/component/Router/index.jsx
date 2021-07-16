import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Description from '../../container/Description';
import Layout from '../Layout';
import Catalog from '../../container/Catalog';


export default class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' render={() => {
                    return (
                        <Layout>
                            <Catalog/>
                        </Layout>
                    )
                }}/>
                
                <Route exact path='/item/:id' render={(props) => {
                    return (
                        <Description itemId={props.match.params.id}/>
                    )
                }}/>
            </Switch>
        )
    }
}