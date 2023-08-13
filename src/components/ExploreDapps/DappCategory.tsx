import React, { Component } from 'react'
// import { Link } from "react-router-dom";
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Category {
    name: string;
    icon: any;
    color: string;
    url: string;
    dapps?: [
        {
            name: string,
            url: string,
            description: string,
            icon: string
        },
    ]
}

export default function DappCategory(category: Category) {

    const name = category.name;
    const icon = category.icon;
    const color = category.color;
    const url = category.url;
    // const url = `/${name.toLowerCase().replace(" ", "-")}`;

        return (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <Link
                className={'dapp-category-container'}
                href={url}
                // onClick={category.link}
            >
                < div className={'dapp-category'} >
                    <FontAwesomeIcon
                        className={'dapp-category-icon'}    
                        icon={icon}
                        color={color}
                    />
                    < span className={'dapp-category-name'} >{name}</span>
                </div>
            </Link>
        )
}