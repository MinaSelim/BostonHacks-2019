import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';

const state = {
  labels: ['Used', 'Remaining'],
  datasets: [
    {
      backgroundColor: [
        '#002F35',
        '#6f9a8d',
      ],
      data: [80,20]
    }
  ]
}

export default class doughnut extends Component {
  render() {
    return (
      <div>
        <Doughnut
          data={state}
          options={{
            title:{
              display:true,
              text:'Weekly Carbon Usage',
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