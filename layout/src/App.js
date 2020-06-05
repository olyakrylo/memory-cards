import React from 'react';
import Content from './components/Content';
import Adding from './components/Adding';
import Auth from './components/Auth';
import Loading from './components/Loading';
import Alert from './components/Alert';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
// import { faMoon } from '@fortawesome/free-solid-svg-icons';

import {
  Route,
  Switch
} from "react-router-dom";

class App extends React.Component {
    state = {
        theme: 0,
        username: localStorage.getItem('name'),
        id: localStorage.getItem('id')
    }

    setTheme = index => {
        this.setState({
            theme: index
        });
    }

    setUsername = (name, id) => {
        this.setState({
            username: name,
            id: id
        });
    }

    changeColorTheme = () => {
        document.querySelector('.root').classList.toggle('root_black');
    }

    render() {
        let { url } = this.props;
        return (
            <div className='container'>
                <p className='container__header'>
                    <span className='container__header_seagreen'>Memory</span> cards
                    <FontAwesomeIcon icon={faMoon} className='moon' onClick={this.changeColorTheme} />
                </p>
                <Loading />
                <Alert />
                <Switch>
                    <Route exact path='/' render={() => <Auth setUsername={this.setUsername} url={url} />} />
                    <Route exact path='/content' render={() => <Content setTheme={this.setTheme} theme={this.state.theme}
                                                                        name={this.state.username} id={this.state.id} url={url}/>} />
                    <Route path='/add' render={() => <Adding theme={this.state.theme} name={this.state.username} 
                                                             id={this.state.id} url={url}/>} />
                </Switch>
            </div>
        )
    }
}

export default App;