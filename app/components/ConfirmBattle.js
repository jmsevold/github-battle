import React from 'react'

function spitToScreen(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}
const ConfirmBattle = (props) => {
  return(
    props.isLoading
    ? <p>LOADING</p>
    : <div>Confirm battle! {spitToScreen(props)}</div>
  );
}

module.exports = ConfirmBattle;
