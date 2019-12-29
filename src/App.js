import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.min.css';
import Navbar from './components/layout/Navbar';
import Home from './components/home/Home';
import Characters from './components/characters/Characters';
import Spells from './components/spells/Spells';
import SortingHat from './components/sortingHat/SortingHat';
import axios from 'axios';

class App extends Component {
  state = {
		apiUrl: 'https://www.potterapi.com/v1/',
		apiKey: '$2a$10$q8vH0RvkE7xASoyFGCD2hOqxDNdEbui1Q2OclFQrNs9ayO3QRU/hi',
    randomHouse: '',
    characters: [],
    spells: []
  }

  componentDidMount () {
    /* GET HOUSE */
		axios.get(this.state.apiUrl + 'sortingHat')
			.then(res => {
				const randomHouse = res.data;
        this.setState({ randomHouse });
        console.log({randomHouse});
			})
			.catch(function(err) {
				console.log(err);
      })
    /* GET CHARACTERS */
    axios.get(`${this.state.apiUrl}characters?key=${this.state.apiKey}`)
      .then(res => {
        const characters = res.data;
        this.setState({ characters });
      })
      .catch(function(err) {
        console.log(err);
    })
    /* GET SPELLS */
    axios.get(`${this.state.apiUrl}spells?key=${this.state.apiKey}`)
      .then(res => {
        const spells = res.data;
        this.setState({ spells });
      })
      .catch(function(err) {
        console.log(err);
    })
  }
  
  render() {
    return (
      <Router>
        <Navbar />

        <Route exact path = '/' Component={Home}>
          <Home house={ this.state.randomHouse } apiUrl={ this.state.apiUrl } apiKey={ this.state.apiKey } />
        </Route>

        <Route path = '/Characters' Component={Characters}>
          <Characters house={ this.state.randomHouse } apiUrl={ this.state.apiUrl } apiKey={ this.state.apiKey } characters={ this.state.characters } />
        </Route>

        <Route path = '/Spells' Component={Spells}>
          <Spells house={ this.state.randomHouse } apiUrl={ this.state.apiUrl } apiKey={ this.state.apiKey } spells={ this.state.spells }/>
        </Route>

        <Route path = '/SortingHat' Component={SortingHat}>
          <SortingHat house={ this.state.randomHouse } apiUrl={ this.state.apiUrl } apiKey={ this.state.apiKey } />
        </Route>

      </Router>
    );
  }
}

export default App;
