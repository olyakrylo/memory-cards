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

        fetch(this.props.url, {
            method: "GET",
        })       
        .then(response => response.json())
        .then(users => {
            let user = users.find(x => x.name === input.value);
            if (user) {
                this.login(user)
            } else {
                this.signup(input.value)
            }
        });
    }

    login = user => {
        fetch(this.props.url + user.id, {
            method: "GET"
        })
        .then(response => response.json())
        .then(info => {
            this.enter(user.name, user.id, info);
        })
    }

    signup = name => {
        fetch(this.props.url, {
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "name": name })
        })
        .then(response => {
            if (response.status === 200) {
                return response.json()
            }
        })
        .then(user => {
            this.enter(user.name, user._id, user.info)
        })
    }

    enter = (name, id, info) => {
        this.props.setUsername(name, id);
        localStorage.setItem('name', name);
        localStorage.setItem('id', id);
        localStorage.setItem('cards', JSON.stringify(info));
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