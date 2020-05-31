import React from 'react';
import './Alert.css'

export default class Alert extends React.Component {
    hide = () => {
        let alertWin = document.querySelector('.alert__window');
        alertWin.classList.add('alert__hiding');
        setTimeout(() => {
            document.querySelector('.alert').classList.remove('alert_show');
            alertWin.classList.remove('alert__hiding');
        }, 300);
    }

    render() {
        return (
            <div className={`${this.props.addClass} alert`}>
                <div className='alert__window'>
                    <p className='alert__text'>Alert!</p>
                    <button className='alert__btn' onClick={this.hide}>ok!</button>
                </div>
            </div>
        )
    }
}