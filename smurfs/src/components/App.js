import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs, addSmurfs, updateSmurfs, deleteSmurfs } from '../actions';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';
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
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {this.props.smurfs.map(smurf => {
          return <Smurf smurf={smurf}/>
        })}
        <SmurfForm addSmurfs={this.props.addSmurfs}/>
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