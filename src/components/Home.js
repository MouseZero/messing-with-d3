import React, { Component } from 'react';
import TestChart from './TestChart';
import d3 from 'd3';

class Home extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    // d3.selectAll("p").style("color", "red");
  }

  render(){
    return (
      <div id='big'>
        Hello World 3
        <TestChart />
      </div>
    );
  }

}

export default Home;
