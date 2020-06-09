import React from 'react';
import './Cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import Item from './Item';
import slide from './slide';
import Confirm from '../Confirm';


export default class Cards extends React.Component {
    state = {
        cards: this.props.cards,
        isCounterInput: false
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
            this.props.delCard(num, false);
        }
        confirm.addEventListener('click', handler);
    }

    *genCards() {
        let { cards } = this.props;
        for (let i in cards) {
            yield (
                <Item question={cards[i].q} answer={cards[i].a} num={i} key={i} flip={this.flip} areShuffled={this.props.areShuffled} 
                      deleteCard={this.deleteCard} type={this.props.type} setEditing={this.props.setEditing} />
            )
        }
    }

    flip = () => {
        let list = document.querySelector('.cards__list');
        list.classList.add('cards__list_hidden');

        setTimeout(() => {  
            let { type } = this.props;
            this.props.setType(type === 'q' ? 'a' : 'q');
            list.classList.remove('cards__list_hidden');
        }, 300);
    }

    move(direction) {
        let delay = 0;
        if (this.props.type === 'a') {
            this.flip();
            delay = 300;
        }
        setTimeout(() => {
            let { currCard, setCurrCard, cards } = this.props;
            if (direction === 'left' && currCard !== 0) {
                setCurrCard(currCard - 1);
            } else if (direction === 'right' && currCard !== cards.length - 1) {
                setCurrCard(currCard + 1);
            }
        }, delay)
    }

    clear = () => {
        let confirm = document.querySelector('.cards__confirm');
        confirm.classList.remove('confirm_hidden');
        let handler = e => {
            if (e.target.tagName !== 'BUTTON') return;
            confirm.removeEventListener('click', handler);
            confirm.classList.add('confirm_hidden');
            if (e.target.dataset.del === 'no') return;
            this.props.delCard(null, true);
        }
        confirm.addEventListener('click', handler);
    }

    firstCard = () => {
        if (this.props.cards.length) return;
        return (
            <Item question={'Hello! Click to flip!'} answer={'Click again!'} num={-1}
                  type={this.props.type} flip={this.flip} setEditing={this.props.setEditing} />
        )
    }

    renderCounter = (len, curr) => {
        let hasCards = !!this.props.cards.length;
        if (this.state.isCounterInput && hasCards) {
            return <input className='counter__input' onKeyUp={this.counterInput} autoFocus
                          onBlur={() => this.setState({isCounterInput: false})}/>
        } else {
            let clickFunc = hasCards ? () => this.setState({isCounterInput: true}) : null;
            return (
                <span onClick={clickFunc}>
                    {len ? curr + 1 : 0}
                </span>
            )
        }
    }

    counterInput = e => {
        let num = isNaN(Number(e.target.value)) ? null : (Number(e.target.value) || 1);
        if (!num || num < 1 || num > this.props.cards.length) {
            e.target.classList.add('counter__input_wrong');
            return;
        }
        e.target.classList.remove('counter__input_wrong');
        if (e.key === 'Enter') {
            this.setState({
                isCounterInput: false,
            });
            this.props.setCurrCard(num - 1);
        }
    }

    render() {
        let curr = this.props.currCard;
        let len = this.props.cards.length;
        let clientWidth = document.documentElement.clientWidth;
        let containerWidth = clientWidth > 500 ? 500 : clientWidth * 0.9;
        let mLeft = -containerWidth * curr + 'px';
        return (
            <div className='cards'>
                <div className='cards__container' >
                    <ul className='cards__list' style={{marginLeft: mLeft}}>
                        {this.firstCard()}
                        {[...this.genCards()]}
                    </ul>
                </div>
                <p className='cards__counter counter'>
                    {this.renderCounter(len, curr)}
                    {` / ${len}`}
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
                <Confirm addClass='cards__confirm'/>
            </div>
        )
    }
}