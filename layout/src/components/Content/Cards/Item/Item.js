import React from 'react';
import './Item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-regular-svg-icons';
import ReactHtmlParser from 'react-html-parser';

export default class Item extends React.Component {
    openEditing = e => {
        e.stopPropagation();
        this.props.setEditing(true);
    }

    render() {
        let { question, num, answer } = this.props;
        question = question.replace(/\n/g, '</br>');
        answer = answer.replace(/\n/g, "<br/>");
        let delClass = 'cards__delete' + (~num ? '' : '_hidden');
        let editClass = 'cards__edit' + (~num && !this.props.areShuffled ? '' : '_hidden');
        return (
            <li className={'cards__item'} onClick={this.props.flip}>
                <span id={`card-${num}`} className='cards__item-text' >
                    {ReactHtmlParser(this.props.type === 'q' ? question : answer)}
                </span>
                <FontAwesomeIcon className={editClass} icon={faEdit}
                                 onClick={this.openEditing} />
                <FontAwesomeIcon 
                    className={delClass}
                    icon={faTrashAlt} 
                    onClick={(e) => this.props.deleteCard(e, this.props.num)} />
            </li>
        )
    }
}