import React from 'react';
import './Auth.css';
import Login from './Login';
import Signup from './Signup';

export default class Auth extends React.Component {
    state = {
        window: 'login'
    }

    showAlert = (text) => {
        let alert = document.querySelector('.alert');
        alert.querySelector('.alert__text').textContent = text;
        alert.classList.add('alert_show');
    }

    setWindow = name => {
        document.querySelector('.auth__info-text').classList.remove('auth__info-text_show');
        let auth = document.querySelector('.auth');
        auth.classList.add('auth_hidden');
        setTimeout(() => {
            this.setState({
                window: name
            });
            auth.classList.remove('auth_hidden');
        }, 300);
    }

    enter = (name, id, info, password) => {
        this.props.setUsername(name, id, password);
        localStorage.setItem('name', name);
        localStorage.setItem('id', id);
        localStorage.setItem('cards', JSON.stringify(info));
        window.location.assign(window.location.href + 'content');
    }

    toggleInfo = () => {
        document.querySelector('.auth__info-text').classList.toggle('auth__info-text_show');
    }

    showInfo = (shouldShow) => {
        if (shouldShow) {
            document.querySelector('.auth__info-text').classList.add('auth__info-text_show');
        } else {
            document.querySelector('.auth__info-text').classList.remove('auth__info-text_show');
        }
    }

    renderWindow = () => {
        let { url } = this.props;
        if (this.state.window === 'login') {
            return <Login setWindow={this.setWindow} enter={this.enter} url={url} showAlert={this.showAlert} />;
        }
        return <Signup setWindow={this.setWindow} enter={this.enter} url={url} showInfo={this.showInfo} showAlert={this.showAlert} />;
    }

    setInfoText = () => {
        if (this.state.window === 'login') {
            return "If you don't have an account, click sign up.";
        }
        return <span>Valid characters:<br />aA-zZ, 0-9 and _.<br />Login should contain at least 3 symbols, password - 6.</span>;
    }

    setAuthTitle = () => {
        if (this.state.window === 'login') {
            return "Authorization";
        }
        return "Registration";
    }

    render() {
        return (
            <div className='auth'>
                <p className='auth__title'>{this.setAuthTitle()}</p>
                <button className='auth__info-btn' onClick={this.toggleInfo}>i</button>
                <div className='auth__info-text'>{this.setInfoText()}</div>
                {this.renderWindow()}

            </div>
        )
    }
}