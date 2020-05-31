import React from 'react';
import './Adding.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default class Adding extends React.Component {
    validate = (e) => {
        let question = document.querySelector('#q-field').value;
        let answer = document.querySelector('#a-field').value;
        if (!question || !answer) {
            document.querySelector('.adding__warning').classList.remove('adding__warning_hidden');
            e.preventDefault();
            return;
        }

        this.save(question, answer);
    }

    save = (question, answer) => {
        let { theme } = this.props;
        let cardsInfo = JSON.parse(localStorage.getItem('cards'));
        cardsInfo[theme].cards.push({
            q: question,
            a: answer
        });
        document.querySelector('.loading').classList.remove('loading_hidden');
        fetch(this.props.url + this.props.id, {
            method: "PUT",
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "info": cardsInfo, "name": this.props.name })
        })
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                document.querySelector('.loading').classList.add('loading_hidden');
                return;
            }
        })
        .then(user => {
            localStorage.setItem('cards', JSON.stringify(user.info));
            let href = window.location.href.match(/^.+\/#\//);
            window.location.assign(href[0] + 'content');
        })
    }

    onInput = (e) => {
        let warning = document.querySelector('.adding__warning');
        if (e.target.value.trim()) {
            warning.classList.add('adding__warning_hidden');
        } else {
            warning.classList.remove('adding__warning_hidden');
        }
    }


    render() {
        if (!this.props.id) {
            let href = window.location.href.match(/^.+\/#\//);
            window.location.assign(href[0]);
            return null;
        }
        return (
            <div className='adding'>
                <p className='adding__warning adding__warning_hidden'>No question or answer!</p>
                <div className='adding__input input'>
                    <p className='input__title'>Add question</p>
                    <textarea id='q-field' className='input__area'
                              onInput={this.onInput}></textarea>
                </div>
                <div className='adding__input input'>
                    <p className='input__title'>Add answer</p>
                    <textarea id='a-field' className='input__area'
                              onInput={this.onInput}></textarea>
                </div>
                <button onClick={this.validate} className='adding__save'>Save</button>
                <Link to='/content'>
                    <FontAwesomeIcon className='adding__back' icon={faArrowLeft} />
                </Link>
            </div>
        )
    }
}