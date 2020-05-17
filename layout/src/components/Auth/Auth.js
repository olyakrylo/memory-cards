import React from 'react';
import './Auth.css';

export default class Auth extends React.Component {

    authOnInput = e => {
        let button = document.querySelector('.auth__btn');
        document.querySelector('.auth__info').classList.remove('auth__info_show');
        if (e.target.value) {
            button.classList.add('auth__btn_red');
        } else {
            button.classList.remove('auth__btn_red');
        }
    }

    auth = () => {
        let input = document.querySelector('.auth__input');
        let regexp = /^\w{3,20}$/;
        if (!input.value.length || !regexp.test(input.value)) {
            document.querySelector('.auth__info').classList.add('auth__info_show');
            return;
        }
        this.props.setUsername(input.value);
        window.location.assign(window.location.href + 'content');
    }

    keyUp = e => {
        if (e.key === 'Enter' && e.target.value.length) {
            this.auth();
        }
    }

    render() {
        return (
            <div className='auth'>
                <p className='auth__title'>Authorization</p>
                <p className='auth__info'>From 3 to 20 symbols (A-Z, a-z, 0-9 or _)</p>
                <div className='auth__form'>
                    <input className='auth__input' maxLength='20' minLength='3' onInput={this.authOnInput} onKeyUp={this.keyUp}
                           onClick={e => e.preventDefault()}/>
                    <button className='auth__btn' onClick={this.auth}>Go!</button>
                </div>
            </div>
        )
    }
}