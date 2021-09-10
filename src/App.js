import React, { Component } from 'react';
import {Switch, HashRouter as Router, Route} from 'react-router-dom';
import { connect} from 'react-redux';
import {loadVenues, loadNeighborhoods, loadTypes, loadNotes } from './store';
//import Nav from './Nav';
import Neighborhoods from './Neighborhoods';
import Header from './Header';
import Footer from './Footer';
import Types from './Types';
import Venue from './Venue';
import InsertNew from './InsertNew';
import Neighborhood from './Neighborhood';
import Type from './Type';
import EditNote from './EditNote';
import Notes from './Notes';
import NewHood from './NewHood';
import NewType from './NewType';
import MustVisit from './MustVisit';
import Visited from './Visited';

class _App extends Component{
  componentDidMount(){
      this.props.bootstrap();
  }

  render(){
      const { view } = this.props;
      return (
        <Router>
          <div>
              <Route component={Header} />
              <Route component={InsertNew} path='/venues' exact />
              <Route component={NewHood} path='/neighborhoods' exact />
              <Route component={Neighborhoods} path='/neighborhoods' exact />
              <Route component={Neighborhood} path='/neighborhoods/:id' />
              <Route component={NewType} path='/types' exact />
              <Route component={Types} path='/types' exact />
              <Route component={MustVisit} path='/venues/mustvisit' exact/>
              <Route component={Visited} path='/venues/visited' exact/>
              <Route component={Type} path='/types/:id' exact/>
              <Route component={Venue} path='/venues/:id' exact/>
              <Route component={Notes} path='/venues/:id' exact/>
              <Route component={EditNote} path='/venues/:id' />
              
          </div>
        </Router>
      );
  }
}

const mapDispatchToProps = (dispatch)=> {
  return{
      bootstrap: ()=> {
          dispatch(loadVenues());
          dispatch(loadNeighborhoods());
          dispatch(loadNotes());
          dispatch(loadTypes());
      }
  };
};

const App = connect(state => state, mapDispatchToProps)(_App);

export default App;

