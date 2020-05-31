import React from 'react';
import './Loading.css';

export default class Loading extends React.Component {
    render() {
        return (
            <div className='loading loading_hidden'>
                <svg viewBox="0 0 36 36" className="loading__bar">
                    <circle id="segment" cx="18" cy="18" r="15.91549430918954" 
                            stroke="#fff" strokeWidth="4" fill='transparent'
                            strokeDasharray="80 20"></circle>
                </svg>
            </div>
        )
    }
}