import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

class App extends Component{
  constructor(){
    super();
    this.state = {
      venues: [],
    };
  }
  async componentDidMount(){
    this.setState({
      venues: (await axios.get('/api/venues')).data,
    });

  }
  render(){
    const { venues } = this.state;
    return (
        <div>
            <h2>BROOKLYN VENUES</h2>
            <ul>
                {
                venues.map( venue => { 
                    return (
                    <li key={ venue.id }>
                        { venue.name }
                    </li>
                    );
                })
                }
            </ul>
        </div>
    );
  }
}

render(<App />, document.querySelector('#root'));
