import React from 'react';
import './Item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

export default class Item extends React.Component {
    state = {
        type: 'q',
    }

    flip = () => {
        let list = document.querySelector('.cards__list');
        let height = parseFloat(getComputedStyle(list).height, 10);
        list.style.height = '0px';
        setTimeout(() => {
            this.setState({
                type: this.state.type === 'q' ? 't' : 'q'
            });
            list.style.height = height + 'px';
        }, 400);
    }

    render() {
        let { question, answer } = this.props;
        return (
            <li className='cards__item' onClick={this.flip}>
                <p className='cards__item-text'> 
                {this.state.type === 'q' ? question : answer}
                </p>
                <FontAwesomeIcon 
                    className='cards__delete' 
                    icon={faTrashAlt} 
                    onClick={(e) => this.props.deleteCard(e, this.props.num)} />
            </li>
        )
    }
}