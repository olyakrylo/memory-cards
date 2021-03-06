import React from 'react';
import Content from './components/Content';
import Adding from './components/Adding';
import Auth from './components/Auth';
import Loading from './components/Loading';
import Alert from './components/Alert';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

import {
  Route,
  Switch
} from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.ping = setInterval(this.pingServer.bind(this), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.ping);
    }

    state = {
        theme: parseInt(localStorage.getItem('theme')) || 0,
        currCard: parseInt(localStorage.getItem('currCard')) || 0,
        username: localStorage.getItem('name'),
        id: localStorage.getItem('id'),
        password: '',
        render: false
    }

    setTheme = index => {
        this.setState({ theme: index });
    }

    setCurrCard = num => {
        this.setState({ currCard: num });
        localStorage.setItem('currCard', num);
    }

    setUsername = (name, id, password) => {
        this.setState({
            username: name,
            id: id,
            password: password
        });
    }

    changeColorTheme = () => {
        document.querySelector('.root').classList.toggle('root_black');
    }

    async pingServer() {
        try {
            const ping = await fetch(this.props.url + "ping",
            { method: "GET" });
            this.setState({ render: ping.status === 200 });
        } catch (error) {
            this.setState({ render: false });
        }
        
    }

    render() {
        let { url } = this.props;
        return (
            <div className='container'>
                <p className='container__header'>
                    <span className='container__header_seagreen'>Memory</span> cards
                    <FontAwesomeIcon icon={faMoon} className='moon' onClick={this.changeColorTheme} />
                </p>
                <Loading forcedDisplay={!this.state.render}/>
                {this.state.render &&
                    <div>
                        <Alert />
                        <Switch>
                            <Route exact path='/' render={() => <Auth setUsername={this.setUsername} url={url} />} />
                            <Route exact path='/content' render={() => <Content setTheme={this.setTheme} theme={this.state.theme}
                                                                                name={this.state.username} id={this.state.id} 
                                                                                url={url} setCurrCard={this.setCurrCard}
                                                                                currCard={this.state.currCard}
                                                                                password={this.state.password} />} />
                            <Route path='/add' render={() => <Adding theme={this.state.theme} name={this.state.username} 
                                                                        id={this.state.id} url={url}
                                                                        setCurrCard={this.setCurrCard} />} />
                        </Switch>
                    </div>
                }
            </div>
        )
    }
}

export default App;