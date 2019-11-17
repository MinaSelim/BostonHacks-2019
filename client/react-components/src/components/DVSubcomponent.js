import React, { Component } from 'react';
import Doughnut from './doughnut';

export default class DVSubcomponent extends Component{
    render(){
        return(
        <div>
            <Doughnut/>
      
            <Doughnut/>
        
            <Doughnut/>
        </div>);
    }
}