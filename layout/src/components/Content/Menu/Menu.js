import React from 'react';
import './Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

export default class Menu extends React.Component {
    themeClicked = (e) => {
        let index = Number(e.target.dataset.num);
        this.props.setTheme(index);
    }

    *genThemes() {
        let { chosenTheme, themes } = this.props;
        for (let i in themes) {
            yield (
                <div className={`menu__theme theme ${Number(i) === chosenTheme ? 'theme_chosen' : ''}`} key={i}>
                    <p className='theme__name' data-num={i} onClick={this.themeClicked}>
                        {themes[i]}
                    </p>
                    <FontAwesomeIcon icon={faTrashAlt} className='theme__del' />
                </div>
            )
        }
    }

    render() {
        let { isOpen } = this.props;
        return (
            <div className={`menu ${isOpen ? '' : 'menu_hidden'}`}>
                {[...this.genThemes()]}
                <div className='menu__add'>+</div>
            </div>
        )
    }
} 