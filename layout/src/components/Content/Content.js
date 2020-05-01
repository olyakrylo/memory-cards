import React from 'react';
import './Content.css';
import Cards from './Cards';
import { Link } from "react-router-dom";

export default class Content extends React.Component {
    render() {
        return (
            <div className='content'>
                <div className='content__add'>
                    <Link to='/add' className='content__add-button'>+</Link>
                </div>

                <Cards />
            </div>
        )
    }
}