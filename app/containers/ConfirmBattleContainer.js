import React from 'react';
import ConfirmBattle from '../components/ConfirmBattle'
import githubHelpers from '../utils/githubHelpers'

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
    const {playerOne, playerTwo} = query;
    githubHelpers.getPlayersInfo([playerOne,playerTwo])
    .then((userObjects) => {
      this.setState({
        isLoading: false,
        playerInfo: [userObjects[0], userObjects[1]]
      })
    })
  }

  handleInitiateBattle(){
    this.context.router.push({
      pathname: '/results',
      state: {
        playerInfo: this.state.playerInfo
      }
    })
  }


  render() {
    return(
      <ConfirmBattle
      isLoading={this.state.isLoading}
      onInitiateBattle={this.handleInitiateBattle.bind(this)}
      playerInfo={this.state.playerInfo}/>
    )
  }
}

ConfirmBattleContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

module.exports = ConfirmBattleContainer;
