import React from 'react';
import './Confirm.css';

export default class Confirm extends React.Component {
    render() {
        return (
            <div className='cards__confirm confirm confirm_hidden'>
                <div className='confirm__window'>
                    <p className='confirm__title'>Are you sure?</p>
                    <div className='confirm__buttons'>
                        <button className='confirm__btn confirm__btn_no' data-del='no'>Oops! No...</button>
                        <button className='confirm__btn confirm__btn_yes' data-del='yes'>Yes!</button>
                    </div>
                </div>
            </div>
        )
    }
}