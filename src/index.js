import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

import Venues from './Venues';
import Venue from './Venue';
import Navbar from './Navbar';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      venues: [],
      selectedVenue: {},
     
    };
    this.venueSelected = this.venueSelected.bind(this);
  }
  async componentDidMount(){
    this.setState({
      venues: (await axios.get('/api/venues')).data,
      
    });
  }
  
  async venueSelected (venueId){
    if (venueId !== ''){
      const venue = (await axios.get(`/api/venues/${venueId}`)).data;
      this.setState({selectedVenue: venue});
    } else {
      this.setState({selectedVenue: venueId});
    }
  }

  render(){
    const { venues, selectedVenue } = this.state;
    const {venueSelected} = this;
    return (
      <div id='main'>
      {
      <Navbar venueSelected={venueSelected} />
      }
        <div>
            {
              selectedVenue.id ? <Venue selectedVenue={selectedVenue} /> : <Venues venues={venues} venueSelected={venueSelected} />
            }
        </div>
      </div>
    );
  }
}

render(<App />, document.querySelector('#root'));
