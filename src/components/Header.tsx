import React, { Component } from 'react'
// import BgImage from 'images/bg-img.svg'; /* todo */
// import LogoWordmark from '../../images/soul.png'; /* todo */
import Image from 'next/image'



export default class Header extends Component {
    render() {
        return (
            <div className={'header'}>
                {/* <img src={LogoWordmark} className={'header logo-img'} alt={'background'} /> */}
                <Image
                    src={'/images/soulswap-cover.png'} className={'header bg-img'}
                    alt={'background'}
                    height={'720px'}
                    width={'1200px'}
                />
            </div>
        );
    }
}