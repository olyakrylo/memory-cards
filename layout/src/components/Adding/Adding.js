import React from 'react';
import './Adding.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default class Adding extends React.Component {
    save = (e) => {
        let question = document.querySelector('#q-field').value;
        let answer = document.querySelector('#a-field').value;
        if (!question || !answer) {
            document.querySelector('.adding__warning').classList.remove('adding__warning_hidden');
            e.preventDefault();
            return;
        }
        let {theme} = this.props;
        let cardsInfo = JSON.parse(localStorage.getItem('memoryCards'));
        cardsInfo[theme].cards.push({
            q: question,
            a: answer
        });
        localStorage.setItem('memoryCards', JSON.stringify(cardsInfo));
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
                <Link to='/'>
                    <button onClick={this.save} className='adding__save'>Save</button>
                </Link>
                <Link to='/'>
                    <FontAwesomeIcon className='adding__back' icon={faArrowLeft} />
                </Link>
            </div>
        )
    }
}