import React from 'react';
import './Login.css';

export default class Login extends React.Component {

    login = () => {
        let name = document.querySelector('.login__input[type="login"]').value.toLowerCase();
        let password = document.querySelector('.login__input[type="password"]').value;
        if (!/^\w{3,}$/.test(name) || !/^\w{6,}$/.test(password)) {
            return;
        }
        document.querySelector('.loading').classList.remove('loading_hidden');
        fetch(this.props.url, {
            method: "GET",
        })       
        .then(response => response.json())
        .then(users => {
            let user = users.find(x => x.name === name);
            if (user) {
                this.checkLogin(user, password)
            } else {
                document.querySelector('.loading').classList.add('loading_hidden');
                this.props.showAlert('User not found :(')
            }
        });
    }

    checkLogin = (user, password) => {
        fetch(this.props.url + user.id, {
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "password": password })
        })
        .then(response => response.json())
        .then(info => {
            if (!info.length) {
                document.querySelector('.loading').classList.add('loading_hidden');
                this.props.showAlert('User not found :(')
                return;
            }
            this.props.enter(user.name, user.id, info);
        })
    }

    keyUp = e => {
        if (e.key === 'Enter' && e.target.value.length) {
            this.login();
        }
    }

    render() {
        return (
            <div className='auth__form login'>
                <div className='login__input-container'>
                    <input className='login__input' maxLength='20' minLength='3' onInput={this.authOnInput}
                        onClick={e => e.preventDefault()} type='login' placeholder='login' />
                </div>
                <div className='login__input-container'>
                    <input className='login__input' maxLength='20' minLength='8' onInput={this.authOnInput}
                        onClick={e => e.preventDefault()} type='password' placeholder='password' onKeyUp={this.keyUp} />
                </div>
                <div className='login__buttons'>
                    <button className='login__btn login__btn_seagreen' onClick={this.login}>Log in</button>
                    <button className='login__btn login__btn_transparent'
                            onClick={() => this.props.setWindow('signup')}>Sign up</button>
                </div>
            </div>
        )
    }
}