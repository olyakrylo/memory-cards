import React from 'react';
import './Cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import Item from './Item';
import slide from './slide';
import Confirm from './Confirm';

export default class Cards extends React.Component {
    state = {
        cards: JSON.parse(localStorage.getItem('items')) || [],
        currentIndex: 0
    };

    componentDidMount() {
        let carousel = document.querySelector('.cards__list');
        carousel.addEventListener('touchstart', e => slide.call(this, e, carousel));
    }

    deleteCard = (e, num) => {
        e.stopPropagation();
        let confirm = document.querySelector('.cards__confirm');
        confirm.classList.remove('confirm_hidden');
        let handler = e => {
            if (e.target.tagName !== 'BUTTON') return;
            confirm.removeEventListener('click', handler);
            confirm.classList.add('confirm_hidden');
            if (e.target.dataset.del === 'no') return;
            let newCards = this.state.cards.filter((el, i) => i !== Number(num));
            let newCurr = this.state.currentIndex ? this.state.currentIndex - 1 : 0;
            this.setState({
                cards: newCards,
                currentIndex: newCurr
            });
            localStorage.setItem('items', JSON.stringify(newCards));
        }
        confirm.addEventListener('click', handler);
    }

    *genCards() {
        let {cards} = this.state;
        for (let i in cards) {
            yield (
                <Item question={cards[i].question} answer={cards[i].answer} num={i} key={i}
                      deleteCard={this.deleteCard} />
            )
        }
    }

    move(direction) {
        if (direction === 'left' && this.state.currentIndex !== 0) {
            this.setState({
                currentIndex: this.state.currentIndex - 1
            })
        } else if (direction === 'right' && this.state.currentIndex !== this.state.cards.length - 1) {
            this.setState({
                currentIndex: this.state.currentIndex + 1
            })
        }
    }

    clear = () => {
        let confirm = document.querySelector('.cards__confirm');
        confirm.classList.remove('confirm_hidden');
        let handler = e => {
            if (e.target.tagName !== 'BUTTON') return;
            confirm.removeEventListener('click', handler);
            confirm.classList.add('confirm_hidden');
            if (e.target.dataset.del === 'no') return;
            localStorage.removeItem('items');
            this.setState({
                cards: [],
                currentIndex: 0
            });
        }
        confirm.addEventListener('click', handler);
    }

    render() {
        let curr = this.state.currentIndex;
        let len = this.state.cards.length;
        let clientWidth = document.documentElement.clientWidth;
        let containerWidth = clientWidth > 500 ? 600 : clientWidth * 0.9;
        let mLeft = -containerWidth * curr + 'px';
        return (
            <div className='cards'>
                <div className='cards__container' >
                    <ul className='cards__list' style={{marginLeft: mLeft}}>
                        {[...this.genCards()]}
                    </ul>
                </div>
                <p className='cards__counter'>
                    {`${len ? curr + 1 : 0} / ${len}`}
                </p>
                <FontAwesomeIcon 
                    className={`cards__arrow arrow__right ${curr === len - 1 || !len ? 'cards__arrow_hidden' : ''}`}
                    icon={faArrowRight}
                    onClick={() => this.move('right')} />
                <FontAwesomeIcon 
                    className={`cards__arrow arrow__left ${curr === 0 ? 'cards__arrow_hidden' : ''}`}
                    icon={faArrowLeft}
                    onClick={() => this.move('left')} />
                <button className='cards__clear' onClick={this.clear} >
                    <FontAwesomeIcon icon={faTrashAlt} />
                    &ensp;Clear all
                </button>
                <Confirm />
            </div>
        )
    }
}