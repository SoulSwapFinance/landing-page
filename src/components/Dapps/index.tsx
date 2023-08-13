import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
        <Link
            href={url}
            // onClick={() => dapp.url}
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
                <Image
                    src={dapp.icon}
                    alt={dapp.name}
                    width={32}
                    height={32}
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