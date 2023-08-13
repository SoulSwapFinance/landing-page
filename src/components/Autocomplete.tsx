// .autocomplete {
//     position: absolute;
//     top: 163px;
//     z-index: 999999;
//     height: 42px;
//     left: 16px;
//     right: 16px;
//     background: #FFFFFF; /* todo */
//     box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25); /* todo */
//     border-radius: 20px;
//     padding-left: 16px;
//     padding-right: 16px;
//     display: flex;
// }

// .autocomplete-input {
//     width: 100%;
//     font-size: 16px;
//     outline-width: 0;
//     border: 0px;
//     justify-content: center;
//     text-align: center;
//     -webkit-appearance: none;
// }

import React, { Component } from 'react'
import onUrlSubmit from '../utils'
// import './index.css';

export default class Autocomplete extends Component {
    state = {
        value: ''
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    onFocus = (event) => {
        event.preventDefault();
        // @ts-ignore
        window.ethereum.send('metamask_showAutocomplete');
    };

    handleSubmit = (event) => {
        event.preventDefault();
        // @ts-ignore
        const searchEngine = window.__mmSearchEngine || 'Google';
        const sanitizedInput = onUrlSubmit(this.state.value, searchEngine);
        window.location.href = sanitizedInput;
    }

   render(){
        return (
            <form 
                className={'autocomplete'}
                onSubmit={this.handleSubmit}
            >
                <input
                    autoCapitalize="none"
                    type={'text'} 
                    placeholder={'Search the Decentralized Web'} 
                    className={'autocomplete-input'}
                    value={this.state.value}
                    onChange={this.handleChange} 
                    onFocus={this.onFocus}
                />
            </form>
        );
    }
}