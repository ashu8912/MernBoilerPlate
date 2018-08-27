import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import AppRoutes from './components/AppRoutes/AppRoutes';
// import {connect} from 'react-redux';
class App extends Component {
  
  render() {
    return (
      <Layout>
      <AppRoutes/>
        </Layout>
    );
  }
}

export default App;
