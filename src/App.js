import React, { Component } from 'react';
import axios from 'axios';

//import Venues from './Venues';
//import Venue from './Venue';
import Navbar from './Navbar';
//import Neighborhoods from './Neighborhoods';
import Footer from './Footer';
import VenueView from './VenueView';
//import Types from './Types';
//import AddNote from './AddNote';
import NeighborhoodView from './NeighborhoodView';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      venues: [],
      selectedVenue: {},
      neighborhoods: [],
      selectedNeighborhood: {},
      notes: [],
      types: [],
      selectedType: {},
      venueView: true,
      neighborhoodView: false,
//make a VenueView and NeighborhoodView      neighborhoodView: false,
    };

    this.venueSelected = this.venueSelected.bind(this);
    this.neighborhoodSelected = this.neighborhoodSelected.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.typeSelected = this.typeSelected.bind(this);
    this.addNote = this.addNote.bind(this);
  }
  async componentDidMount(){
    this.setState({
      venues: (await axios.get('/api/venues')).data,
      neighborhoods: (await axios.get('/api/neighborhoods')).data,
      types: (await axios.get('/api/types')).data
    });
  }
  async venueSelected (venueId){
    if (venueId !== ''){
      const venue = (await axios.get(`/api/venues/${venueId}`)).data;
      this.setState({
        selectedVenue: venue,
        notes: venue.notes,
        venueView: true,
        neighborhoodView: false,
      });
    } else {
      this.setState({
        selectedVenue: venueId,
        venueView: true,
        neighborhoodView: false,
      });
    }
  };
  async neighborhoodSelected (neighborhoodId){
    if (neighborhoodId !== ''){
      const neighborhood = (await axios.get(`/api/neighborhoods/${neighborhoodId}`)).data;
      this.setState({
        selectedNeighborhood: neighborhood,
        venueView: false,
        neighborhoodView: true,
      });
    } else {
      this.setState({
        selectedNeighborhood: neighborhoodId,
        venueView: false,
        neighborhoodView: true,
      });
    }
  };
  async typeSelected (typeId){
    if (typeId !== ''){
      const type = (await axios.get(`/api/types/${typeId}`)).data;
      this.setState({selectedType: type});
    } else {
      this.setState({selectedType: typeId});
    }
  }
  async deleteNote(noteId){
    try{
      await axios.delete(`/api/notes/${noteId}`);
      //const notes = this.state.notes.filter(i => i.id !== noteId);
      this.setState(this.state.notes.filter(i => i.id !== noteId));
    }
    catch(ex){
      console.log(ex)
    }
  }
  async addNote(venueId, note){
    try{
      //console.log(note);
      //const note = {id, comment, venueId};
      await axios.post(`/api/venues/${venueId}/notes`, note);
      //const notes = this.state.notes.push(note);
      this.setState(this.state.notes.push(note));
    }
    catch(ex){
      console.log(ex)
    }
  }
  render(){
    const { venues, selectedVenue, neighborhoods, selectedNeighborhood, types, selectedType, venueView, neighborhoodView } = this.state;
    const {venueSelected, neighborhoodSelected, typeSelected, deleteNote, addNote } = this;
    return (
      <div id='main-container'>
        <div id='navbar'>
        {
        <Navbar venueSelected={venueSelected} venueView={venueView} neighborhoodView={neighborhoodView} />
        }
        </div>
        <div id='venues-container'>
            {
              venueView ? <VenueView selectedVenue={selectedVenue} deleteNote={deleteNote} venues={venues} venueSelected={venueSelected}/> : <NeighborhoodView neighborhoods={neighborhoods} neighborhoodSelected={neighborhoodSelected} selectedNeighborhood={selectedNeighborhood} venueSelected={venueSelected}/>
            }
        </div>
        <div id='footer'>
              {
                <Footer neighborhoods={neighborhoods} types={types}/>
              }
        </div>
        <div id='real-footer'>
              {
               
              }
        </div>
      </div>
    );
  }
}

export default App;

