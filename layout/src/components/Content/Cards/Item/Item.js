import React from 'react';
import './Item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

export default class Item extends React.Component {
    flip = () => {
        let list = document.querySelector('.cards__list');
        list.classList.add('cards__list_hidden');

        setTimeout(() => {  
            let { type } = this.props;
            this.props.setType(type === 'q' ? 'a' : 'q');
            list.classList.remove('cards__list_hidden');
        }, 300);
    }

    render() {
        let { question, num, answer } = this.props;
        let delClass = 'cards__delete' + (~num ? '' : '_hidden');
        return (
            <li className={'cards__item'} onClick={this.flip}>
                <p id={`card-${num}`} className='cards__item-text' >
                    {this.props.type === 'q' ? question : answer}
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