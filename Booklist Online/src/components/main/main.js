import React, { Component } from 'react';

import './main.css';
import Border2 from '../../assets/images/header-tb-border.gif';

import LeftColumn from './left-column';
import MainColumn from './main-column';
import RightColumn from './right-column';
import Spinner from '../spinner';

class Main extends Component {
    state = {
        isLoading: true,
    }

    componentDidMount() {
        this.setState({
            isLoading: false,
        })
    }
    
    render() {
        const { isLoading } = this.state;
        return (
        <Spinner isLoading={isLoading}>
            <div className="main-container">
                <img src={Border2} className="top-border" alt=""/>
                <div className="flex">
                    <LeftColumn />
                    <MainColumn />
                    <RightColumn />
                </div>
                <img src={Border2} className="top-border" alt=""/>
            </div>
        </Spinner>
        )
    }
}

export default Main;