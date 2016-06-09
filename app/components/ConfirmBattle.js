import React from 'react'

const ConfirmBattle = (props) => {
  return(
    props.isLoading ? <p>LOADING</p> : <p>Confirm battle!</p>
  );
}

module.exports = ConfirmBattle;
