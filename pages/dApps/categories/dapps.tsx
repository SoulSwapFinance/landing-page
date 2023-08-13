import React from 'react'
import Navbar from 'components/Navbar'
import Dapp from 'components/Dapp'
import { dapps, categories } from 'data/all-dapps'

export default function Dapps({ name }) {

        return (
            <div>
                <Navbar title={name} />
                <div className={'category-wrapper'}>
                {   dapps.sort((a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0)).map( (dapp, i) => (
                        <Dapp 
                        // data={dapp} 
                        // key={dapp.dapps[i].url}
                        url={dapps[i].url}
                        key={dapps[i].name}
                        name={dapps[i].name}
                        // dapps={dapp.dapps} 
                        icon={dapps[i].icon} 
                        dapps={[]}
                        // color={dapp.color} 
                        // dapps={undefined} 
                        // position={i} 
                        />
                    ))
                }
                </div>
            </div>
        );
}