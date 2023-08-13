import React, { Component } from 'react'
// import { Link } from "react-router-dom";
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from 'layout/Layout';

interface Dapp {
    name: string;
    url: string;
    description: string;
    icon: any;
}

export default function Dapp(dapp: Dapp) {

    const name = dapp.name;
    const icon = dapp.icon;
    // const color = dapp.color;
    const url = dapp.url;
    // const url = `/${name.toLowerCase().replace(" ", "-")}`;

        return (
            <div className="soul_fn_content">
            {/* // eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link
                className={'dapp-category-container'}
                href={url}
                // onClick={category.link}
            >
                < div className={'dapp-category'} >
                    <Image 
                        src={icon}
                        alt={name}
                        height={50}
                        width={50}
                    />
                    {/* <FontAwesomeIcon
                        className={'dapp-category-icon'} 
                        icon={icon}   
                        // icon={icon}
                        // color={color}
                    /> */}
                    <div className={'dapp-category-name'}>
                        {name}
                    </div>
                </div>
            </Link>
            </div>
        )
}