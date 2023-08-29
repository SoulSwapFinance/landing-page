import React, { Component } from 'react'
// import BgImage from 'images/bg-img.svg'; /* todo */
// import LogoWordmark from '../../images/soul.png'; /* todo */
import Image from 'next/image'
import { useRouter } from 'next/router';



export default function Header () {
    const router = useRouter()
    // render() {
        return (
            <div className={'header'}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    // gridTemplateColumns: '1fr 1fr',
                    // gap: '112px',
                }}
            >
                {/* <img src={LogoWordmark} className={'header logo-img'} alt={'background'} /> */}
                <Image
                    src={'/images/soulswap-cover.png'} className={'header bg-img'}
                    alt={'background'}
                    height={'624px'}
                    width={'1248px'}
                />
        {/* { router.pathname != ('/Apps') &&
            <div
                style={{ 
                    display: 'flex',
                    border: '4px solid',
                    borderRadius: '8px',
                    borderColor: '#000000',
                    margin: '6px',
                    padding: '4px',
                }}
                onClick={() => window.location.href = '/Apps'}
            >
            {'View All Categories'}
        </div>
        } */}
            </div>
        );
    // }
}