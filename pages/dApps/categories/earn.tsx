import React, { Component } from 'react'
import Header from 'components/Header'
// import Tabs from '../components/Tabs/'
import Autocomplete from 'components/Autocomplete'
import ExploreDapps from 'components/ExploreDapps'
import Dapps from 'components/Dapps';
import { earnDapps } from 'data/all-dapps'
// import FeaturedDappsCarousel from 'components/FeaturedDappsCarousel/'
// import VotedDappsCarousel from 'components/VotedDappsCarousel/'


// import{trackEvent, ANALYTICS_EVENT_OPTS} from '../util/analytics'

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
    // componentDidMount() {
    //   trackEvent(ANALYTICS_EVENT_OPTS.IMPRESSION);
    // }

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