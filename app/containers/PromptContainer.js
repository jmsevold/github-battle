import React from 'react';
import Prompt from '../components/Prompt'

class PromptContainer extends React.Component {
  constructor(props,context) {
    super(props)
    context.router
    this.state = {
      username: ''
    };
    this.handleSubmitUser = this.handleSubmitUser.bind(this)
    this.handleUpdateUser = this.handleUpdateUser.bind(this)

  }

  handleUpdateUser(e){
    this.setState({
      username: e.target.value
    })
  }

  handleSubmitUser(e){
    e.preventDefault();
    let username = this.state.username;
    this.setState({
      username: ""
    });
    this.routeAfterFormSubmit();
  }

  routeAfterFormSubmit(){
    if(this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
    } else {
      this.context.router.push(`/playerTwo/${this.state.username}`);
    }
  }

  render() {
    return(
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username} />
    )
  }
}

PromptContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

module.exports = PromptContainer;
