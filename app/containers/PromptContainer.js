import React from 'react';

class PromptContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',

    };
  }

  onUpdateUser(e){
    console.log(this.state.username);
    this.setState({
      username: e.target.value
    })
  }

  render() {
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
      <h1>{this.props.route.header}</h1>
      <div className="col-sm-12">


        <form>
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
module.exports = PromptContainer;
