import React from 'react';
import './Loading.css';

export default class Loading extends React.Component {
    render() {
        const className = `loading ${this.props.forcedDisplay ? "" : "loading_hidden"}`;
        return (
            <div className={className}>
                <div className="loading__container">
                    <svg viewBox="0 0 36 36" className="loading__bar">
                        <circle id="segment" cx="18" cy="18" r="15.91549430918954" 
                                stroke="#fff" strokeWidth="4" fill='transparent'
                                strokeDasharray="80 20"></circle>
                    </svg>
                    <div className="loading__title">Connecting...</div>
                </div>
            </div>
        )
    }
}