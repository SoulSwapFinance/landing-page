import React, { Component } from 'react'
import Dapp from './Dapp'
import { categories, dapps } from '../../data/all-dapps'
// import './index.css'


interface Category {
    name: string;
    icon: any;
    color: string;
    url: string;
    description: string;
    dapps?: [
        {
            name: string,
            url: string,
            description: string,
            icon: string
        },
    ]
}

export default function Dapps () {
    // render(){
        return (
            // <div className={'explore-dapps'}> 
            <div 
                className={'explore-dapps'}
            //     style={{ 
            //         display: 'flex', 
            //         flexDirection: 'row', 
            //         paddingBottom: '18px', 
            //         flexWrap: 'wrap',
            //         width: '100%', 
            //         height: '100%', 
            // }}
            > 
                { 
                    dapps.map( (dapp) => (
                        <Dapp 
                            // data={dapp}
                            name={dapp.name}
                            icon={dapp.icon}
                            // color={dapp.color}
                            key={dapp.name}
                            url={dapp.url} 
                            description={dapp.description}                            // dapps={dapp.dapps}
                        />
                    ))
                }
            </div>
        );
}