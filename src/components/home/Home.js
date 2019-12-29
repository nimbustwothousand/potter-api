import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div id='wrap' className='page-Home'>
        <h1>Welcome to the Potter Codex</h1>
        <h4>This project was built using the <a href='https://www.potterapi.com/'>PotterAPI</a>. You can browse the <Link to='/Characters'>characters</Link> and <Link to='/Spells'>spells</Link> of the Harry Potter universe, and even ask the <Link to='/SortingHat'>Sorting Hat</Link> to sort you into a house!</h4>
        <hr/>
        <h1>About</h1>
        <h4>I built this website to practice using (and demonstrate my ability to use) APIs to build React.js apps. This project utilises React.js, as well as react-router-dom, for page-rendering and routing. It uses axios to make API calls to the Potter API, and I used npm and Node with Visual Studio Code in my dev environment. I also used SASS to create the stylesheet, utilising the Live Sass Compiler plugin to have it automatically compiled to CSS.</h4>
      </div>
    );
  }
}

export default Home;
