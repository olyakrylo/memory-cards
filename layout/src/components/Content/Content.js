import React from 'react';
import './Content.css';
import Cards from './Cards';
import Menu from './Menu';
import Burger from './Burger';
import { Link } from "react-router-dom";

export default class Content extends React.Component {
    state = {
        isMenuOpen: false,
        chosenTheme: 0,
        currCard: 0,
        cardsInfo: JSON.parse(localStorage.getItem('memoryCards'))
    }

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
        return (
            <div className='content'>
                <div className='content__add' onClick={() => this.props.setTheme(this.state.chosenTheme)}>
                    <Link to='/add' className='content__add-button'>+</Link>
                </div>

                <Cards cards={this.state.cardsInfo[this.state.chosenTheme].cards}
                       currCard={this.state.currCard}
                       setCurrCard={this.setCurrCard}
                       delCard={this.delCard} />

                <Burger toggleMenu={this.toggleMenu}/>
                <Menu isOpen={this.state.isMenuOpen}
                      themes={this.state.cardsInfo.map(x => x.theme)}
                      chosenTheme={this.state.chosenTheme}
                      setTheme={this.setTheme}/>
            </div>
        )
    }
}