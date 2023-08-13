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
            <Link
                href={url}
                onClick={() => category.url}
                style={{
                    display: 'flex',
                    flex: 1,
                    minWidth: '50%',
                }}
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
                    <FontAwesomeIcon
                        icon={icon}
                        color={color}
                        style={{
                            fontSize: 32,
                            lineHeight: 32,
                            width: 32,
                            height: 32,
                        }}
                    />
                    <div
                        style={{
                            display: "flex",
                            justifyContent: 'center',
                            alignContent: 'center',
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
        )
}