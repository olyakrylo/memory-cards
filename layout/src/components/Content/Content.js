import React from 'react';
import './Content.css';
import Cards from './Cards';
import Menu from './Menu';
import Burger from './Burger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRandom } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export default class Content extends React.Component {
    state = {
        isMenuOpen: false,
        chosenTheme: this.props.theme,
        currCard: 0,
        cardsInfo: JSON.parse(localStorage.getItem('memoryCards'))
    }

    // componentDidMount() {
    //     this.setState({
    //         chosenTheme: this.props.theme
    //     })
    // }

    toggleMenu = () => {
        this.setState({
            isMenuOpen: !this.state.isMenuOpen
        })
    }

    setTheme = num => {
        this.setState({
            chosenTheme: num,
            currCard: 0
        })
    }

    setCurrCard = num => {
        this.setState({
            currCard: num
        })
    }

    addTheme = name => {
        let { cardsInfo } = this.state;
        cardsInfo.push({
            theme: name,
            cards: []
        });
        this.setState({
            cardsInfo: cardsInfo
        });
        localStorage.setItem('memoryCards', JSON.stringify(cardsInfo));
    }

    delTheme = () => {
        // let { chosenTheme } = this.state;
        let newCards = this.state.cardsInfo.filter((el, i) => i !== this.state.chosenTheme);
        // console.log(newCards);
        this.setState({
            cardsInfo: newCards,
            chosenTheme: 0
        })
        localStorage.setItem('memoryCards', JSON.stringify(newCards));
    }

    shuffleTheme = () => {
        let { cardsInfo, chosenTheme } = this.state;
        let { cards } = cardsInfo[chosenTheme];
        for (let i = cards.length - 1; i > 0; --i) {
            let j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        cardsInfo[chosenTheme].cards = cards;
        this.setState({
            cardsInfo: cardsInfo,
            currCard: 0
        });
    }

    delCard = (num, all) => {
        let { cardsInfo, chosenTheme, currCard } = this.state;
        cardsInfo[chosenTheme].cards = all ? [] : cardsInfo[chosenTheme].cards.filter((el, i) => i !== Number(num));
        let newCurr = currCard && !all ? currCard - 1 : 0;
        this.setState({
            cardsInfo: cardsInfo,
            currCard: newCurr
        });
        localStorage.setItem('memoryCards', JSON.stringify(cardsInfo));
    }

    render() {
        let cardsLength = this.state.cardsInfo[this.state.chosenTheme].cards.length;
        return (
            <div className='content'>
                <div className='content__control' onClick={() => this.props.setTheme(this.state.chosenTheme)}>
                    <Link to='/add' className='content__add'>+</Link>
                </div>

                <Cards cards={this.state.cardsInfo[this.state.chosenTheme].cards}
                       currCard={this.state.currCard}
                       setCurrCard={this.setCurrCard}
                       delCard={this.delCard} />

                <FontAwesomeIcon icon={faRandom} onClick={this.shuffleTheme}
                                 className={`content__shuffle ${cardsLength > 1 ? '' : 'content__shuffle_hidden'}`} />

                <Burger toggleMenu={this.toggleMenu}/>
                <Menu isOpen={this.state.isMenuOpen}
                      themes={this.state.cardsInfo.map(x => x.theme)}
                      chosenTheme={this.state.chosenTheme}
                      setTheme={this.setTheme}
                      addTheme={this.addTheme}
                      delTheme={this.delTheme} />
            </div>
        )
    }
}