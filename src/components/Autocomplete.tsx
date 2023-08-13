import React, { Component } from 'react'
import onUrlSubmit from '../utils'

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
        const searchEngine = "Google"
        // const searchEngine = window.__mmSearchEngine || 'Google';
        const sanitizedInput = onUrlSubmit(this.state.value, searchEngine);
        window.location.href = sanitizedInput;
    }

   render(){
        return (

            <form 
                className={'autocomplete'}
                onSubmit={this.handleSubmit}
                style={{
                    // position: 'absolute',
                    top: '163px',
                    zIndex: 999999,
                    height: '42px',
                    left: '16px',
                    right: '16px',
                    background: '#FFFFFF', /* todo */
                    boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.25)', /* todo */
                    borderRadius: '20px',
                    paddingLeft: '16px',
                    paddingRight: '16px',
                    display: 'flex',
                    border: '1px solid',
                    borderColor: '#8A02FF'
                }}
                >
                <input
                    autoCapitalize="none"
                    type={'text'} 
                    placeholder={'Search the Decentralized Web'} 
                    className={'autocomplete-input'}
                    value={this.state.value}
                    onChange={this.handleChange} 
                    onFocus={this.onFocus}
                    style={{
                        width: '100%',
                        fontSize: '16px',
                        outlineWidth: '0',
                        border: '0px',
                        justifyContent: 'center',
                        textAlign: 'center',
                        WebkitAppearance: 'none',
                    }}
                />
            </form>
        );
    }
}