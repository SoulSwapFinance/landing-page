import React, { Component } from 'react'
import Header from 'components/Header'
import Autocomplete from 'components/Autocomplete'
import Dapps from 'components/Dapps';
import { tradingDapps } from 'data/all-dapps'

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

export default class Trading extends Component {

    render() {
        return (
            <div>
                <Header />
                <Autocomplete />
                <div>
                    {tradingDapps.sort((a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0)).map((dapp, i) => (

                        <Dapps
                            name={tradingDapps[i].name}
                            url={tradingDapps[i].url}
                            description={tradingDapps[i].description}
                            icon={tradingDapps[i].icon}
                        />
                    ))}
                </div>
            </div>
        );
    }
}