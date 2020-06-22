import React, { Component } from 'react';
import { Col } from 'reactstrap';
import './InfoCard.scss';

export class InfoCard extends Component {
  _icons = (val) => {
    if(val === '1')
      return(<img src='images/1.png' />)
    else if(val === '2')
      return(<img src='images/2.png' />)
    else if(val === '3')
      return(<img src='images/3.png' />)
    else if(val === '4')
      return(<img src='images/4.png' />)
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
            Rp. {this.props.value} M <br/>
            ( {((parseFloat(this.props.pagu.replace(',','')) - parseFloat(this.props.penawaran.replace(',',''))) / parseFloat(this.props.penawaran.replace(',','')) * 100).toFixed(2)} % )
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
            Rp. {this.props.value} M
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
            Penawaran
          </div>
          <div className="card-value-eff right-val">
            Rp. {this.props.value} M
          </div>
        </div>
      </Col>
    );
  }
}