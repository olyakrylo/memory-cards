import React from 'react';
import './Item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

export default class Item extends React.Component {
    state = {
        type: 'q',
    }

    flip = (event) => {
        let list = document.querySelector('.cards__list');
        list.classList.add('cards__list_hidden');

        let itemText = event.target.querySelector('.cards__item-text');
        let { question, answer } = this.props;
        setTimeout(() => {  
            let { type } = this.state;
            itemText.textContent = type === 'q' ? answer : question;
            this.setState({
                type: type === 'q' ? 'a' : 'q'
            });
            list.classList.remove('cards__list_hidden');
        }, 300);
    }

    render() {
        let { question, num } = this.props;
        let delClass = 'cards__delete' + (~num ? '' : '_hidden');
        return (
            <li className={'cards__item'} onClick={this.flip}>
                <p id={`card-${num}`} className='cards__item-text' >
                    {question}
                </p>
                <FontAwesomeIcon className='cards__flip' icon={faSyncAlt} />
                <FontAwesomeIcon 
                    className={delClass}
                    icon={faTrashAlt} 
                    onClick={(e) => this.props.deleteCard(e, this.props.num)} />
            </li>
        )
    }
}