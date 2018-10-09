// React / rendering layer
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
import { connect } from 'react-redux'; // allow components to call redux action creators
import * as actions from '../actions'; // action creators

import Header from './Header';
import Landing from './landing';

const Dashboard = () => <h2>Dashboard</h2>
const StudentNew = () => <h2>StudentNew</h2>

class App extends Component {
    componentDidMount() {
       this.props.fetchUser(); 
    }
    render () {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/students" component={Dashboard} />
                        <Route path="/students/new" component={StudentNew} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App);