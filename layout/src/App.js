import React from 'react';
import Content from './components/Content'
import Adding from './components/Adding'
import './App.css';

import {
  Route,
  Switch
} from "react-router-dom";

class App extends React.Component {
    state = {
        theme: 0
    }

    setTheme = index => {
        this.setState({
            theme: index
        });
    }

    render() {
        return (
            <div className='container'>
                <p className='container__header'>
                    <span className='container__header_seagreen'>Memory</span> cards
                </p>
                <Switch>
                    <Route exact path='/' render={() => <Content setTheme={this.setTheme} />} />
                    <Route path='/add' render={() => <Adding theme={this.state.theme}/>} />
                </Switch>
            </div>
        )
    }
}

export default App;