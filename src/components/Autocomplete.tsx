import React, { Component } from 'react'
import onUrlSubmit from '../utils'

export default class Autocomplete extends Component {
    state = {
        value: ''
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
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

    render() {
        return (
            <div
                style={{
                    display: 'grid',
                    justifyContent: 'row',
                    // alignItems: 'center',
                    width: '100%',
                }}
            >
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
                        style={{
                            width: '100%',
                            fontSize: '16px',
                            outlineWidth: '0',
                            border: '2px solid',
                            borderColor: '#8A02FF',
                            justifyContent: 'center',
                            textAlign: 'center',
                            WebkitAppearance: 'none',
                            marginBottom: '10px',
                        }}
                    />
                </form>
            </div>
        )
    }
}