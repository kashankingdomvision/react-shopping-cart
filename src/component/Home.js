import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, Home Component</h1>;
        <h4>Hello, {this.props.userName}</h4>
        <h4>Hello, {this.props.userAge}</h4>
      </div>
    );
    
  }
}

// mapStateToProps: this is used to retrieve the store state
function mapStateToProps(state) {
  return ({
      userName: state.rootReducer.userName,
      userAge: state.rootReducer.userAge
  })
}

// mapDispatchToProps: this is used to retrieve the actions and dispatch them to the store
function mapDispatchToProps(dispatch) {
  return ({
      // changeStateToReducer: (allChangeState) => {
      //     dispatch(changeState(allChangeState))
      // }
      // changeUserName: ()=>{dispatch(changeUserName())}
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);