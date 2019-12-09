import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { FaArrowCircleDown, FaHourglassHalf, FaTrophy, FaRegChartBar } from 'react-icons/fa';
import './InfoCard.scss';

export class InfoCard extends Component {
  _icons = (val) => {
    if(val === '1')
      return(<FaArrowCircleDown />)
    else if(val === '2')
      return(<FaHourglassHalf/>)
    else if(val === '3')
      return(<FaTrophy/>)
    else if(val === '4')
      return(<FaRegChartBar />)
  }

  render() {
    return (
      <Col md="3">
        <div className="card-box">
          <div className="card-icon" style={{backgroundColor:this.props.color}}>
            {this._icons(this.props.icon)}
          </div>
          <div className="card-info">
            <div className="card-title">
              {this.props.title}
            </div>
            <div className="card-value">
              {this.props.value}
            </div>
          </div>
        </div>
      </Col>
    );
  }
}

export class InfoCardEfficient extends Component {
  render() {
    return (
        <div className="card-box-eff mid-box">
          <div className="card-title-mid" style={{backgroundColor:this.props.color}}>
            Efisiensi
          </div>
          <div className="card-value-mid">
            Rp. {this.props.value} T <br/>
            ( 24% )
          </div>
        </div>
    );
  }
}

export class InfoCardEfficientLeft extends Component {
  render() {
    return (
      <Col md="4">
        <div className="card-box-eff">
          <div className="card-title-eff" style={{backgroundColor:this.props.color}}>
            Pagu
          </div>
          <div className="card-value-eff">
            Rp. {this.props.value} T
          </div>
        </div>
      </Col>
    );
  }
}

export class InfoCardEfficientRight extends Component {
  render() {
    return (
      <Col md="4">
        <div className="card-box-eff">
          <div className="card-title-eff right">
            Harga Penawaran
          </div>
          <div className="card-value-eff right-val">
            Rp. {this.props.value} T
          </div>
        </div>
      </Col>
    );
  }
}