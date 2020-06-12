import React from 'react';
import './Signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default class Login extends React.Component {

    validate = () => {
        let { name, password } = this.checkInput();
        if (!name) return;

        document.querySelector('.loading').classList.remove('loading_hidden');
        fetch(this.props.url, {
            method: "GET",
        })       
        .then(response => response.json())
        .then(users => {
            let user = users.find(x => x.name === name);
            if (user) {
                document.querySelector('.loading').classList.add('loading_hidden');
                this.props.showAlert('User already exists')
                return;
            }
            this.signup(name, password);
        });
    }

    signup = (name, password) => {
        fetch(this.props.url, {
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "name": name, "password": password })
        })
        .then(response => response.json())
        .then(user => {
            this.props.enter(name, user.id, user.info, password);
        })
    }

    checkInput = () => {
        let name = document.querySelector('.signup__input[type="login"]').value.toLowerCase();
        let password = document.querySelectorAll('.signup__input[type="password"]')[0].value;
        let confPassword = document.querySelectorAll('.signup__input[type="password"]')[1].value;

        if (!/^\w{3,}$/.test(name) || !/^\w{6,}$/.test(password) || password !== confPassword) {
            this.props.showInfo(!/^\w{3,}$/.test(name) || !/^\w{6,}$/.test(password));
            if (password !== confPassword) {
                document.querySelector('.signup__check').classList.add('signup__check_show');
            }
            return {
                name: null,
                password: null
            };
        }
        return {
            name: name,
            password: password
        };
    }

    secondPasswordInput = e => {
        let password = document.querySelectorAll('.signup__input[type="password"]')[0].value;
        if (e.target.value === password) {
            document.querySelector('.signup__check').classList.remove('signup__check_show');
        }
    }

    enter = e => {
        if (e.key === 'Enter') {
            this.validate();
        }
    }

    render() {
        return (
            <div className='auth__form signup'>
                <FontAwesomeIcon icon={faArrowLeft} className='signup__back' onClick={() => this.props.setWindow('login')} />

                <div className='signup__input-container'>
                    <input className='signup__input' maxLength='20' minLength='3'
                        onClick={e => e.preventDefault()} type='login' placeholder='login' />
                </div>
                <div className='signup__input-container'>
                    <input className='signup__input' maxLength='20' minLength='8'
                        onClick={e => e.preventDefault()} type='password' placeholder='password' />
                </div>
                <div className='signup__input-container'>
                    <input className='signup__input' maxLength='20' minLength='8' onInput={this.secondPasswordInput}
                        onClick={e => e.preventDefault()} type='password' placeholder='confirm password' onKeyUp={this.enter} />
                    <FontAwesomeIcon icon={faTimes} className='signup__check signup__check_red' />
                </div>
                    
                <button className='signup__btn' onClick={this.validate}>Sign up</button>
            </div>
        )
    }
}