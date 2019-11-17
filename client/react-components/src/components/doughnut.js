import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';


export default class doughnut extends Component {
  constructor(props){
    super(props);
    this.state ={
      name: props.name,
      labels: ['% Used', '% Remaining'],
      datasets: [
    {
      backgroundColor: [
        '#002F35',
        '#6f9a8d',
      ],
      data: [props.percentage, (100-props.percentage)]
    }
  ]
    }
  }
  render() {
    return (
      <div>
        <Doughnut
          data={this.state}
          options={{
            title:{
              display:true,
              text:this.state.name+'Carbon Usage',
              fontSize:20
            },
            legend:{
              display:true,
              position:'bottom'
            }
          }}
        />
      </div>
    );
  }
}