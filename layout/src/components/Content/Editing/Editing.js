import React from 'react';
import './Editing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default class Editing extends React.Component {
    save = () => {
        let question = document.querySelector('.field__input[data-type="q"]').value;
        let answer = document.querySelector('.field__input[data-type="a"]').value;
        if (!question.trim() || !answer.trim()) return;

        let {currCard, cardsInfo, theme } = this.props;
        let { q, a } = cardsInfo[theme].cards[currCard];
        if (q === question && a === answer) {
            this.props.setEditing(false);
            return;
        }
        cardsInfo[theme].cards[currCard].q = question;
        cardsInfo[theme].cards[currCard].a = answer;
        this.props.updateCards(cardsInfo, theme, currCard);
        this.props.setEditing(false);
    }

    render() {
        let {currCard, cardsInfo, theme } = this.props;
        let card = cardsInfo[theme].cards[currCard] || {q: '', a: ''};
        return (
            <div className='editing'>
                <div className='editing__window'>
                    <p className='editing__title'>Editing card</p>
                    <div className='editing__info info'>
                        <p className='info__theme'><span>Theme: </span>{cardsInfo[theme].theme}</p>
                        <p className='info__cards'><span>Card: </span>{currCard + 1}</p>
                    </div>
                    <div className='editing__field field'>
                        <p className='field__title'>question</p>
                        <textarea className='field__input' data-type='q' defaultValue={card.q}></textarea>
                    </div>
                    <div className='editing__field field'>
                        <p className='field__title'>answer</p>
                        <textarea className='field__input' data-type='a' defaultValue={card.a}></textarea>
                    </div>
                    <button className='editing__save' onClick={this.save}>Save</button>
                    <FontAwesomeIcon icon={faTimes} className='editing__close'
                                     onClick={() => this.props.setEditing(false)} />
                </div>
            </div>
        )
    }
}