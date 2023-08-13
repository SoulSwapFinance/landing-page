import React from 'react'
import Link from 'next/link';

import backIcon from 'assets/svgs/back-icon.svg';

// import './index.css';

export default function Navbar({ title }) {
    // render(){
    //     const { title } = this.props;
        return (
            <div className={'navbar'}>
                <Link
                    href={'/'}
                    className={'navbar-back'}
                >
                    <img src={backIcon}  alt={'go back'} />
                </Link>
                <h1>{title}</h1>
            </div>
        );
}