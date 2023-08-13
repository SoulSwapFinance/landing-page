import React, { Component } from 'react'
import DappCategory from './DappCategory'
import { categories, dapps } from '../../data/all-dapps'
// import './index.css'


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

export default function ExploreDapps () {
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
                    categories.map( (dapp) => (
                        <DappCategory 
                            // data={dapp}
                            name={dapp.name}
                            icon={dapp.icon}
                            color={dapp.color}
                            key={dapp.name} 
                            url={dapp.url}
                            // dapps={dapp.dapps}
                        />
                    ))
                }
            </div>
        );
}