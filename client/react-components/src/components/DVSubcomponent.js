import React, { Component } from 'react';
import Doughnut from './doughnut';

export default class DVSubcomponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: {},
            percentage: 0
        }
        this.fetchData = this.fetchData.bind(this);
        this.getData = this.getData.bind(this);
        this.calculatePercentage = this.calculatePercentage.bind(this);
    }

    fetchData(){
        fetch("https://greendetective-1573928556612.appspot.com/message")
        .then((response) =>   {
            console.log(response)
            this.setState({data: response});
            return response;
          })
        .then((response)=>{
            let percentageOfUsage = this.calculatePercentage(this.getData(0, 30, this.state.data));
            this.setState({percentage:percentageOfUsage }); ;
        })  
    }

    getData(x, y, data){
        let footPrint = [];
        let timestamp = [];

        for(let i = 0; i< data.timestamp.length; i++){
            if(data.timestamp[i] >= x && data.timestamp[i] <= y ) {
                footPrint.push(data.footprint[i]);
                timestamp.push(data.timestamp[i]);
            }
        }
        return({f:footPrint, t:timestamp});
    }

    calculatePercentage(dataObj, num){
        let footPercentage = dataObj.f;
        footPercentage = (footPercentage/num)*100;
        return footPercentage;
    }
    
    render(){
        return(
        <div>
            <Doughnut name={'Weekly '} percentage={20}/>
            <Doughnut name={'Monthly '} percentage={10}/>
            <Doughnut name={'Yearly '} percentage={62}/>
        </div>);
    }
}