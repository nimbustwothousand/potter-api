import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Spells extends Component {
  state = {
    spells: []
  }
  componentDidMount () {
    /* GET SPELLS */
    axios.get(`${this.props.apiUrl}spells?key=${this.props.apiKey}`)
      .then(res => {
        const spells = res.data;
        this.setState({ spells });
      })
      .catch(function(err) {
        console.log(err);
    })
  }

  render() {
    const { spells } = this.state;
    let spellListContent;
    if(spells) {
      spellListContent = (
        <div className='page-Spells'>
          {spells.map(spell => (
            <div key={ spell._id } className='spell-wrap'>
              <div className='row'>
                <div><strong>Incantation </strong>{ spell.spell }</div>
              </div>
              <div className='row'>
                <div><strong>Type </strong>{ spell.type }</div>
              </div>
              <div className='row'>
                <div><strong>Effect </strong>{ spell.effect }</div>
              </div>
            </div>
          ))} 
        </div>
      )
    } else {
      spellListContent = (<h1>Sorry, we couldn't load data from the API at this time. Please try again later!</h1>);
    }
    return (
      <div id='wrap'>
      {spellListContent}
      </div>
    );
  }
}

Spells.propTypes = {
  spells: PropTypes.array.isRequired,
  apiKey: PropTypes.string.isRequired,
  apiUrl: PropTypes.string.isRequired
}
export default Spells;
