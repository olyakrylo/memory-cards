import React from 'react';
import './Item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-regular-svg-icons';

export default class Item extends React.Component {
    render() {
        let { question, num, answer } = this.props;
        let delClass = 'cards__delete' + (~num ? '' : '_hidden');
        let editClass = 'cards__edit' + (~num ? '' : '_hidden');
        return (
            <li className={'cards__item'} onClick={this.props.flip}>
                <p id={`card-${num}`} className='cards__item-text' >
                    {this.props.type === 'q' ? question : answer}
                </p>
                <FontAwesomeIcon className={editClass} icon={faEdit} />
                <FontAwesomeIcon 
                    className={delClass}
                    icon={faTrashAlt} 
                    onClick={(e) => this.props.deleteCard(e, this.props.num)} />
            </li>
        )
    }
}