import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs, addSmurfs, updateSmurfs, deleteSmurfs } from '../actions';
/*
  to wire this component up you're going to need a few things.
  I'll let you do this part on your own. 
  Just remember, `how do I `connect` my components to redux?`
  `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    console.log(this)
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        {this.props.smurfs.map(smurf => {
          return(<p>{smurf.name}</p>)
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  addingSmurfs: state.addingSmurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  updatingSmurfs: state.updatingSmurfs,
  deletingSmurfs: state.deletingSmurfs,
  error: state.error
})

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurfs, updateSmurfs, deleteSmurfs }
)(App);