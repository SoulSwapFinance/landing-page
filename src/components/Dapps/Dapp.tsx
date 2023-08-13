import React, { Component } from 'react'
// import { Link } from "react-router-dom";
import Link from 'next/link'
import Image from 'next/image'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Layout from 'layout/Layout';


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
        <div
            style={{
                background: '#F6F8FA',
                borderRadius: 8,
                // margin: 7 
            }}
        >
            {/* // eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link
                style={{
                    display: 'flex',
                    flex: 1,
                    minWidth: '50%',
                }}
                href={url}
            // onClick={category.link}
            >
                <div
                    style={{
                        display: 'flex',
                        flex: 1,
                        height: 64,
                        background: '#FFFFFF',
                        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.25)',
                        borderRadius: 8,
                        textAlign: 'center',
                        alignItems: 'center',
                        minWidth: 150,
                        margin: 7,
                        paddingLeft: 15,
                        paddingRight: 8,
                    }}
                >
                    <Image
                        src={icon}
                        alt={name}
                        height={50}
                        width={50}
                    />
                    <div
                        style={{
                            display: "flex",
                            fontStyle: 'normal',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            color: '#24292E',
                            padding: '8px',
                            alignItems: 'center',
                        }}
                    >
                        {name}
                    </div>
                </div>
            </Link>
        </div>
    )
}