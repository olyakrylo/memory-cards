import React from 'react';
import './Burger.css';

export default class Burger extends React.Component {
    clicked = (e) => {
        e.currentTarget.classList.toggle('burger_cross');
        this.props.toggleMenu();
    }

    render() {
        return (
            <div className='burger' onClick={this.clicked}>
                <div className='burger__line burger__line_top'></div>
                <div className='burger__line burger__line_center'></div>
                <div className='burger__line burger__line_center'></div>
                <div className='burger__line burger__line_bottom'></div>
            </div>
        )
    }
}