import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Characters extends Component {
  state = {
    characters: []
  }
  componentDidMount () {
    /* GET CHARACTERS */
    axios.get(`${this.props.apiUrl}characters?key=${this.props.apiKey}`)
      .then(res => {
        const characters = res.data;
        this.setState({ characters });
      })
      .catch(function(err) {
        console.log(err);
    })
  }

  render() {
    const { characters } = this.state;
    let characterListContent;
    if(characters) {
      characterListContent = (
        <div className='page-Characters'>
          {characters.map(char => (
            <div key={ char._id } className='character-wrap'>
              <div className='row'>
                <div><strong>Name </strong>{ char.name }</div>
              </div>
              <div className='row'>
                <div><strong>House </strong>{ char.house }</div>
              </div>
              <div className='row'>
                <div><strong>School </strong>{ char.school }</div>
              </div>
              <div className='row'>
                <div><strong>Role </strong>{ char.role }</div>
              </div>
              <div className='row'>
                <div><strong>Blood Status </strong>{ char.bloodStatus }</div>
              </div>
              <div className='row'>
                <div><strong>Species </strong>{ char.species }</div>
              </div>
            </div>
          ))} 
        </div>
      )
    } else {
      characterListContent = (<h1>Sorry, we couldn't load data from the API at this time. Please try again later!</h1>);
    }
    return (
      <div id='wrap'>
      {characterListContent}
      </div>
    );
  }
}

Characters.propTypes = {
  characters: PropTypes.array.isRequired,
  apiKey: PropTypes.string.isRequired,
  apiUrl: PropTypes.string.isRequired
}
export default Characters;
