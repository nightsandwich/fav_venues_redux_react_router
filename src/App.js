import React, { Component } from 'react';
import axios from 'axios';

import Venues from './Venues';
import Venue from './Venue';
import Navbar from './Navbar';
import Neighborhoods from './Neighborhoods';
import { Note } from '../server/db';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      venues: [],
      selectedVenue: {},
      neighborhoods: [],
      selectedNeighborhood: {},
      notes: []
    };
    this.venueSelected = this.venueSelected.bind(this);
    this.neighborhoodSelected = this.neighborhoodSelected.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }
  async componentDidMount(){
    this.setState({
      venues: (await axios.get('/api/venues')).data,
      neighborhoods: (await axios.get('/api/neighborhoods')).data
    });
  }
  async venueSelected (venueId){
    if (venueId !== ''){
      const venue = (await axios.get(`/api/venues/${venueId}`)).data;
      this.setState({selectedVenue: venue});
      this.setState({notes: venue.notes});
    } else {
      this.setState({selectedVenue: venueId});
    }
  }
  async neighborhoodSelected (neighborhoodId){
    if (neighborhoodId !== ''){
      const neighborhood = (await axios.get(`/api/neighborhoods/${neighborhoodId}`)).data;
      this.setState({selectedNeighborhood: neighborhood});
    } else {
      this.setState({selectedNeighborhood: neighborhoodId});
    }
  }
  async deleteNote(noteId){
    const note = (await axios.get(`/api/notes/${noteId}`)).data;
    await axios.delete(`/api/notes/${note.id}`);
    const notes = this.state.notes.filter(i => i.id !== note.id);
    this.setState({notes});
  }
  render(){
    const { venues, selectedVenue, neighborhoods, selectedNeighborhood } = this.state;
    const {venueSelected, neighborhoodSelected, deleteNote } = this;
    return (
      <div id='main'>
      {
      <Navbar venueSelected={venueSelected} />
      }
        <div>
            {
              selectedVenue.id ? <Venue selectedVenue={selectedVenue} deleteNote={deleteNote} /> : <Venues venues={venues} venueSelected={venueSelected} />
            }
        </div>
        <div>
            {
              selectedNeighborhood.id ? <Neighborhood selectedNeighborhood={selectedNeighborhood} /> : <Neighborhoods neighborhoods={neighborhoods} neighborhoodSelected={neighborhoodSelected} />
            }
        </div>
      </div>
    );
  }
}

export default App;

