import React, { Component } from 'react'
import Header from 'components/Header'
import Autocomplete from 'components/Autocomplete'
import Dapps from 'components/Dapps';
import { earnDapps } from 'data/all-dapps'

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

export default class Earn extends Component {

    render() {
        return (
            <div>
                <Header />
                <Autocomplete />
                <div>
                {   earnDapps.sort((a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0)).map( (dapp, i) => (

                    <Dapps 
                        name={earnDapps[i].name} 
                            url={earnDapps[i].url} 
                            description={earnDapps[i].description} 
                            icon={earnDapps[i].icon}
                    />
                ))}
                </div>
            </div>
        );
    }
}