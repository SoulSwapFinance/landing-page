/* eslint-disable no-use-before-define */
import React, { StrictMode } from 'react'
import './tailwind.css'
import '@fontsource/dm-sans/400.css'
import '@fontsource/dm-sans/700.css'
import 'react-tabs/style/react-tabs.css'
import { isMobile } from 'react-device-detect'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import './i18n'
import App from './App'

const GOOGLE_ANALYTICS_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID
if (typeof GOOGLE_ANALYTICS_ID === 'string') {
    ReactGA.initialize(GOOGLE_ANALYTICS_ID)
    ReactGA.set({
        customBrowserType: !isMobile
            ? 'desktop'
            : 'web3' in window || 'ethereum' in window
            ? 'mobileWeb3'
            : 'mobileRegular'
    })
} else {
    ReactGA.initialize('test', { testMode: true, debug: true })
}

window.addEventListener('error', error => {
    ReactGA.exception({
        description: `${error.message} @ ${error.filename}:${error.lineno}:${error.colno}`,
        fatal: true
    })
})

ReactDOM.render(<App />, document.getElementById('root'))
