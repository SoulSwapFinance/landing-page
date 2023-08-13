import React from 'react'
import Navbar from 'components/Navbar'
import Dapp from 'components/Dapp'
import { dapps, categories } from 'data/all-dapps'

export default function Category({ name }) {
    
    // state = {
    //     category: null
    // };
    
    // componentDidMount(){
    //     const category = allDapps.find((cat) => (
    //         cat.name.toLowerCase().replace(" ", "-") === this.props.match.params.category
    //     ));
        
    //     if(category){
    //         this.setState({category});
    //     }
        
    // }


    // render(){
    //     const { category } = this.state || {};
    //     if(!category){
    //         return null;
    //     } 
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
                        icon={undefined} 
                        // color={undefined} 
                        dapps={undefined} 
                        // position={i} 
                        />
                    ))
                }
                </div>
            </div>
        );
}