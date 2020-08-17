import React from 'react';
import './Content.css';
import Cards from './Cards';
import Menu from './Menu';
import Burger from './Burger';
import Confirm from './Confirm';
import Editing from './Editing';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRandom } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export default class Content extends React.Component {
    componentDidMount() {
        document.querySelector('.loading').classList.add('loading_hidden');
    }

    state = {
        isMenuOpen: false,
        chosenTheme: this.props.theme,
        cardsInfo: JSON.parse(localStorage.getItem('cards')),
        shuffledThemes: [],
        type: 'q',
        showEditing: false,
        counter: 0
    }

    toggleMenu = () => {
        this.setState({
            isMenuOpen: !this.state.isMenuOpen
        })
    }

    setType = (name) => {
        this.setState({
            type: name
        });
    }

    setTheme = num => {
        this.setState({
            chosenTheme: num,
        })
        this.setCurrCard(0);
    }

    setCurrCard = num => {
        this.props.setCurrCard(num);
    }

    updateCards = (cards, theme, curr) => {
        document.querySelector('.loading').classList.remove('loading_hidden');
        fetch(this.props.url + this.props.id, {
            method: "PUT",
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "info": cards, "name": this.props.name })
        })
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                document.querySelector('.loading').classList.add('loading_hidden');
            }
        })
        .then(user => {
            document.querySelector('.loading').classList.add('loading_hidden');
            this.setState({
                cardsInfo: user.info,
                chosenTheme: theme,
            });
            this.setCurrCard(curr);
            localStorage.setItem('cards', JSON.stringify(user.info));
        })
    }

    addTheme = name => {
        let { cardsInfo } = this.state;
        cardsInfo.push({
            theme: name,
            cards: []
        });
        this.updateCards(cardsInfo, this.state.chosenTheme, this.props.currCard);
    }

    delTheme = () => {
        let newCards = this.state.cardsInfo.filter((el, i) => i !== this.state.chosenTheme);
        this.updateCards(newCards, 0, this.props.currCard);
    }

    shuffleTheme = (e) => {
        let { cardsInfo, chosenTheme, shuffledThemes } = this.state;

        let { cards } = JSON.parse(localStorage.getItem('cards'))[chosenTheme];
        if (!~shuffledThemes.indexOf(chosenTheme)) {
            for (let i = cards.length - 1; i > 0; --i) {
                let j = Math.floor(Math.random() * (i + 1));
                [cards[i], cards[j]] = [cards[j], cards[i]];
            }
            shuffledThemes.push(chosenTheme);
        } else {
            shuffledThemes = shuffledThemes.filter(x => x !== chosenTheme);
        }
        cardsInfo[chosenTheme].cards = cards;

        e.currentTarget.classList.toggle('content__shuffle_on');
        this.setState({
            cardsInfo: cardsInfo,
            shuffledThemes: shuffledThemes
        });
        this.setCurrCard(0);
    }

    delCard = (num, all) => {
        let { cardsInfo, chosenTheme } = this.state;
        let { currCard } = this.props;
        cardsInfo[chosenTheme].cards = all ? [] : cardsInfo[chosenTheme].cards.filter((el, i) => i !== Number(num));
        let newCurr = currCard && !all ? currCard - 1 : 0;
        this.updateCards(cardsInfo, this.state.chosenTheme, newCurr);
    }

    quit = () => {
        let confirm = document.querySelector('.quit__confirm');
        confirm.classList.remove('confirm_hidden');
        let handler = e => {
            if (e.target.tagName !== 'BUTTON') return;
            confirm.removeEventListener('click', handler);
            confirm.classList.add('confirm_hidden');
            if (e.target.dataset.del === 'no') return;
            localStorage.clear();
            let href = window.location.href.match(/^.+\/#\//);
            window.location.assign(href[0]);
        }
        confirm.addEventListener('click', handler);
    }

    showEditing = () => {
        if (!this.state.showEditing) return;
        return (
            <Editing theme={this.state.chosenTheme} 
                     currCard={this.props.currCard}
                     cardsInfo={this.state.cardsInfo}
                     updateCards={this.updateCards}
                     setEditing={this.setEditing} />
        )
    }

    setEditing = show => {
        this.setState({
            showEditing: show
        });
    }

    renderAdding = (cardsLength) => {
        if (cardsLength > 999) return null;
        else return (
            <div className='content__control' onClick={() => this.props.setTheme(this.state.chosenTheme)}>
                <Link to='/add' className='content__add'>+</Link>
            </div>
        )
    }

    render() {
        if (!this.props.name) {
            let href = window.location.href.match(/^.+\/#\//);
            window.location.assign(href[0]);
            return null;
        }
        let cardsLength = this.state.cardsInfo[this.state.chosenTheme].cards.length;
        return (
            <div className='content'>
                {this.renderAdding(cardsLength)}

                <Cards cards={this.state.cardsInfo[this.state.chosenTheme].cards}
                       currCard={this.props.currCard}
                       setCurrCard={this.setCurrCard}
                       delCard={this.delCard}
                       type={this.state.type}
                       setType={this.setType}
                       setEditing={this.setEditing}
                       areShuffled={!!this.state.shuffledThemes.length}  />

                <FontAwesomeIcon icon={faRandom} onClick={this.shuffleTheme}
                                 className={`content__shuffle ${cardsLength > 1 ? '' : 'content__shuffle_hidden'}`} />

                <Burger toggleMenu={this.toggleMenu} name={this.props.name} />
                <Menu isOpen={this.state.isMenuOpen}
                      themes={this.state.cardsInfo.map(x => x.theme)}
                      chosenTheme={this.state.chosenTheme}
                      setTheme={this.setTheme}
                      addTheme={this.addTheme}
                      delTheme={this.delTheme}
                      setType={this.setType} />

                <button className='content__quit' onClick={this.quit}>Quit</button>

                <Confirm addClass='quit__confirm'/>
                {this.showEditing()}
            </div>
        )
    }
}