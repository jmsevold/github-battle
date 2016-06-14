import React from 'react'
import {PropTypes} from 'react'


function spitToScreen(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}
const ConfirmBattle = (props) => {
  return(
    props.isLoading
    ? <p>LOADING</p>
    :  <div className="jumbotron col-sm-12 text-center">
          <h1>Confirm Players</h1>
          <div className='col-sm-8 col-sm-offset-2'>

            <div className='col-sm-6'>
              <p className='lead'>Player 1</p>
              {spitToScreen(props.playerInfo[0])}
            </div>

           <div className='col-sm-6'>
             <p className='lead'>Player 2</p>
             {spitToScreen(props.playerInfo[1])}
           </div>

          </div>
          <div className='col-sm-8 col-sm-offset-2'>
            <div className='col-sm-12' >
              INITIATE BATTLE BUTTON
            </div>
            <div className='col-sm-12' >
              LINK TO /PLAYERONE
            </div>
          </div>
      </div>
  );
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playerInfo: PropTypes.array.isRequired,
  onInitiateBattle: PropTypes.func.isRequired
}

module.exports = ConfirmBattle;
