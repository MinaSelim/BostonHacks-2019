import React, { Component } from 'react';
import Doughnut from './doughnut';

export default class DVSubcomponent extends Component{
    render(){
        return(
        <div>
            <Doughnut/>
        </div>
        <div>
            <Doughnut/>
        </div>
        <div>
            <Doughnut/>
        </div>);
    }
}