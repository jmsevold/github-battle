import React from 'react'
import { Link } from 'react-router'

class Home extends React.Component {
  constructor() {
    super()
  }

  render(){
    return(
      <div className="jumbotron col-sm-12 text-center">
        <h1>Github Battle</h1>
        <p className='lead'>Death Match</p>
        <Link to="playerOne">
          <button type="buttton" className="btn btn-large btn-success">
            Get Started
          </button>
        </Link>
     </div>
    )
  }
}

module.exports = Home;
