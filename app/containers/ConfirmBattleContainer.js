import React from 'react';
import ConfirmBattle from '../components/ConfirmBattle'

class ConfirmBattleContainer extends React.Component {
  constructor(props,context) {
    super(props)
    context.router
    this.state = {
      isLoading: true,
      playerInfo: []
    }
  }

  componentDidMount(){
    let query = this.props.location.query;
    console.log(query);
    // fetch info frmo github and update the state
  }


  render() {
    return(
      <ConfirmBattle
      isLoading={this.state.isLoading}
      playerInfo={this.state.playerInfo}/>
    )
  }
}

ConfirmBattleContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

module.exports = ConfirmBattleContainer;
