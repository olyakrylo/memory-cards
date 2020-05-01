import React from 'react';
import './Adding.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default class Adding extends React.Component {
    save = () => {
        let question = document.querySelector('#q-field').value;
        let answer = document.querySelector('#a-field').value;
        if (!question || !answer) return;
        let cards = JSON.parse(localStorage.getItem('items')) || [];
        cards.push({
            question: question,
            answer: answer
        });
        localStorage.setItem('items', JSON.stringify(cards));
        console.log(window.location.host);
        window.location.assign(window.location.protocol + '//' + window.location.host + '/');
    }


    render() {
        return (
            <div className='adding'>
                <div className='adding__input input'>
                    <p className='input__title'>Add question</p>
                    <textarea id='q-field' className='input__area'></textarea>
                </div>
                <div className='adding__input input'>
                    <p className='input__title'>Add answer</p>
                    <textarea id='a-field' className='input__area'></textarea>
                </div>
                <button onClick={this.save} className='adding__save'>Save</button>
                <Link to='/'>
                    <FontAwesomeIcon className='adding__back' icon={faArrowLeft} />
                </Link>
            </div>
        )
    }
}