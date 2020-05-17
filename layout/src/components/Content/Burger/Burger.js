import React from 'react';
import './Burger.css';

export default class Burger extends React.Component {
    clicked = (e) => {
        e.currentTarget.classList.toggle('burger_cross');
        document.querySelector('.burger__username').classList.toggle('burger__username_show');
        this.props.toggleMenu();
    }

    cropName = name => {
        if (name.length < 13) return name;
        return name.slice(0, 11).trim() + '...';
    }

    render() {
        return (
            <div className='burger'>
                <div className='burger__icon' onClick={this.clicked}>
                    <div className='burger__line burger__line_top'></div>
                    <div className='burger__line burger__line_center'></div>
                    <div className='burger__line burger__line_center'></div>
                    <div className='burger__line burger__line_bottom'></div>
                </div>
                <p className='burger__username'>{this.cropName(this.props.name)}</p>
            </div>
        )
    }
}