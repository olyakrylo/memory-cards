import React from 'react';
import './Editing.css';

export default class Editing extends React.Component {
    render() {
        return (
            <div className='editing'>
                <div className='editing__window'>
                    <p className='editing__title'>Editing card</p>
                    <div className='editing__info info'>
                        <p className='info__theme'>Theme: themename</p>
                        <p className='info__cards'>card: currcard</p>
                    </div>
                    <div className='editing__field field'>
                        <p className='field__title'>question</p>
                        <textarea className='field__input'></textarea>
                    </div>
                    <div className='editing__field field'>
                        <p className='field__title'>answer</p>
                        <textarea className='field__input'></textarea>
                    </div>
                    <button className='editing__save'>Save</button>
                </div>
            </div>
        )
    }
}