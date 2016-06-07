import React from 'react';

class PromptContainer extends React.Component {
  constructor(props,context) {
    super(props)
    context.router
    this.state = {
      username: '',

    };
  }

  onUpdateUser(e){
    //console.log(this.state.username);
    this.setState({
      username: e.target.value
    })
  }

  onSubmitUser(e){
    e.preventDefault();
    let username = this.state.username;
    this.setState({
      username: ""
    });
    this.routeAfterFormSubmit();
  }

  routeAfterFormSubmit(){
    if(this.props.routeParams.playerOne){
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.props.routeParams.username
        }
      })
    } else {
      this.context.router.push(`/playerTwo/${this.state.username}`);
    }
  }

  render() {
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
      <h1>{this.props.route.header}</h1>
      <div className="col-sm-12">


        <form onSubmit={this.onSubmitUser.bind(this)}>
          <div className="form-group">
            <input
              className='form-control'
              type="text"
              onChange={this.onUpdateUser.bind(this)}
              value={this.state.username}
             />
          </div>


          <div className="form-group col-sm-4 col-sm-offset-4">
            <button
              className="btn btn-block btn-success"
              type="submit">
                Continue
            </button>
          </div>
        </form>


      </div>
    </div>
    );
  }
}

PromptContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};
module.exports = PromptContainer;
