import React, { Component } from 'react';

class SortingHat extends Component {

  render() {
    return (
    <div id="wrap" className='page-SortingHat'>
			<div className="content">
				<h1>The Sorting Hat has decided...</h1>
				<h2 className={ this.props.house }>{ this.props.house }!</h2>
			</div>
		</div>
    );
  }
}

export default SortingHat;
