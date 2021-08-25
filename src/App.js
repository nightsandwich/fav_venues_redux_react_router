import React, { Component } from 'react';
import axios from 'axios';

//import Venues from './Venues';
//import Venue from './Venue';
import Navbar from './Navbar';
//import Neighborhoods from './Neighborhoods';
import InsertNew from './InsertNew';
import VenueView from './VenueView';
import Footer from './Footer';
import Header from './Header';
import TypeView from './TypeView';
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
      view: null,
      
//make a VenueView and NeighborhoodView      neighborhoodView: false,
    };

    this.venueSelected = this.venueSelected.bind(this);
    this.neighborhoodSelected = this.neighborhoodSelected.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.typeSelected = this.typeSelected.bind(this);
    this.addNote = this.addNote.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount(){
    this.setState({
      venues: (await axios.get('/api/venues')).data,
      neighborhoods: (await axios.get('/api/neighborhoods')).data,
      types: (await axios.get('/api/types')).data,
      view: 'venues',
    });
  }
  async venueSelected (venueId){
    if (venueId !== ''){
      const venue = (await axios.get(`/api/venues/${venueId}`)).data;
      this.setState({
        selectedVenue: venue,
        notes: venue.notes,
        view: 'venues',
      });
    } else {
      this.setState({
        selectedVenue: venueId,
        view: 'venues',
      });
    }
  };
  async neighborhoodSelected (neighborhoodId){
    if (neighborhoodId !== ''){
      const neighborhood = (await axios.get(`/api/neighborhoods/${neighborhoodId}`)).data;
      this.setState({
        selectedNeighborhood: neighborhood,
        view: 'neighborhoods',
      });
    } else {
      this.setState({
        selectedNeighborhood: neighborhoodId,
        view: 'neighborhoods',
      });
    }
  };
  async typeSelected (typeId){
    if (typeId !== ''){
      const type = (await axios.get(`/api/types/${typeId}`)).data;
      this.setState({
        selectedType: type,
        view: 'types'
      });
    } else {
      this.setState({
        selectedType: typeId,
        view: 'types'
      });
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
  async handleSubmit (venue) { //variables???
    try{
      await axios.post('/api/venues', venue);
      this.setState(this.state.venues.push(venue));
    } catch(ex){
      console.log(ex);
    }
  }
  render(){
    const { venues, selectedVenue, neighborhoods, selectedNeighborhood, types, selectedType, view } = this.state;
    const {venueSelected, neighborhoodSelected, typeSelected, deleteNote, addNote, handleSubmit } = this;
    return (
      <div id='main-container'>
        <div id='header'>
              {
                <Header />
              }
        </div>
        <div id='navbar'>
        {
        <Navbar venueSelected={venueSelected} neighborhoodSelected={neighborhoodSelected} typeSelected={typeSelected}/>
        }
        </div>
          <>
            {
              view === 'venues' ? <VenueView 
                                  selectedVenue={selectedVenue} 
                                  deleteNote={deleteNote} 
                                  venues={venues} 
                                  venueSelected={venueSelected} 
                                  neighborhoods={neighborhoods} 
                                  types={types}
                                  neighborhoodSelected={neighborhoodSelected}
                                  typeSelected={typeSelected} /> 
                                  : view === 'neighborhoods' ? 
                                  <NeighborhoodView 
                                  neighborhoods={neighborhoods} 
                                  neighborhoodSelected={neighborhoodSelected} 
                                  selectedNeighborhood={selectedNeighborhood} 
                                  venueSelected={venueSelected} />
                                  :
                                  <TypeView
                                  types={types}
                                  typeSelected={typeSelected}
                                  selectedType={selectedType}
                                  venueSelected={venueSelected} />

            }
          </>
        <div id='footer'>
              {
                <Footer />
              }
        </div>
      </div>
    );
  }
}

export default App;

