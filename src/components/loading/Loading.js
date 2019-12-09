import React, { Component } from 'react';
import { HashLoader, BarLoader } from 'react-spinners'
import './Loading.scss';

export default class LoadingHome extends Component {
  render() {
    return (
      <div className="loading-home">
        <HashLoader size={50} color="#9c1d01"/>
      </div>
    );
  }
}

export class LoadingItem extends Component {
  render() {
    return (
      <div className="loading-item">
        <BarLoader height="8" width="80" color="#fb2d00"/>
      </div>
    )
  }
}

