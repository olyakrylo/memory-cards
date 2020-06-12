import React from 'react';
import './Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

export default class Menu extends React.Component {
    themeClicked = (e) => {
        let index = Number(e.target.dataset.num);
        this.props.setTheme(index);
        this.props.setType('q');
        localStorage.setItem('theme', index);
    }

    *genThemes() {
        let { chosenTheme, themes } = this.props;
        for (let i in themes) {
            yield (
                <div className={`menu__theme theme ${Number(i) === chosenTheme ? 'theme_chosen' : ''}`} key={i}>
                    <p className='theme__name' data-num={i} onClick={this.themeClicked}>
                        {themes[i]}
                    </p>
                    <FontAwesomeIcon icon={faTrashAlt} onClick={this.props.delTheme}
                                     className={`theme__del ${i === '0' ? 'theme__del_hidden' : ''}`} />
                </div>
            )
        }
    }

    addTheme = () => {
        let input = document.querySelector('.menu__add-input');
        if (input.classList.contains('menu__add-input_show')) {
            let { value } = input;
            if (value.length) {
                this.props.addTheme(value);
                input.value = '';
            }
        }
        input.classList.toggle('menu__add-input_show');
        document.querySelector('.menu__add-icon').classList.remove('menu__add-icon_red');
        input.focus();
    }

    addOnInput = e => {
        let button = document.querySelector('.menu__add-icon');
        if (e.target.value) {
            button.classList.add('menu__add-icon_red');
        } else {
            button.classList.remove('menu__add-icon_red');
        }
    }

    keyUp = e => {
        if (e.key === 'Enter') {
            this.addTheme();
        }
    }

    render() {
        let { isOpen } = this.props;
        return (
            <div className={`menu ${isOpen ? '' : 'menu_hidden'}`}>
                {[...this.genThemes()]}
                <div className='menu__add'>
                    <p className='menu__add-icon' onClick={this.addTheme}>+</p>
                    <input className='menu__add-input' onInput={this.addOnInput} onKeyUp={this.keyUp} maxLength='20'/>
                </div>
            </div>
        )
    }
} 