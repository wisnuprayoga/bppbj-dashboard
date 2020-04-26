import React, { Component } from 'react';
import { Col } from 'reactstrap';
import './PieChart.scss';
import Chart from 'react-google-charts';
import { GeneralAPI } from '../../lib/js/api'
import { ApiKey, TenderSelesaiCode } from '../../lib/js/vars'
import { LoadingItem } from '../../components/loading/Loading'

export class PieChartTipePengadaan extends Component {
  constructor(props){
    super(props)

    this.state = {
      isLoaded: false,
      chartData: [],
    }
  }

  componentDidMount() {
    this._getTenderSelesai()
  }

  _getTenderSelesai = () => {
    let headers = { "secret-key": ApiKey}
    var that = this
    GeneralAPI().get(`/b/${TenderSelesaiCode}/latest`,{headers: headers})
    .then(function (response) {
      if(response.status === 200) {
        that.setState({chartData: response.data, isLoaded:true})
      }
    })
    .catch(function (error) {
      console.log(error);
    })
  };

  render() {
    const {isLoaded, chartData} = this.state
    if(isLoaded === true){
      return (
        <Col md="6">
          <div className="frame-box">
            <Chart
                width={'90%'}
                height={'360px'}
                chartType="PieChart"
                className="chart-box"
                loader={<div>Loading Chart</div>}
                spreadSheetUrl={'https://docs.google.com/spreadsheets/d/1_aIrYLtsl6dMKBDW-w2eo2i2_IsgZMKeU60J2YbR9kI/edit#gid=0'}
                options={{
                  chartArea: { width: '95%', height: '65%' },
                  pieHole: 0.4,
                  animation: {
                    startup: true,
                    easing: 'linear',
                    duration: 1000,
                  },
                  pieSliceText: 'value',
                }}
                rootProps={{ 'data-testid': '1' }}
              />
            <div className="chart-title">
              Jenis Pengadaan
            </div>
          </div>
        </Col>
      );
    }
    else {
      return (
        <Col md="6">
          <LoadingItem />
        </Col>
      )
    }
  }
}

export class PieChartMetodePengadaan extends Component {
  constructor(props){
    super(props)

    this.state = {
      isLoaded: false,
      chartData: [],
    }
  }

  componentDidMount() {
    this._getTenderSelesai()
  }

  _getTenderSelesai = () => {
    let headers = { "secret-key": ApiKey}
    var that = this
    GeneralAPI().get(`/b/${TenderSelesaiCode}/latest`,{headers: headers})
    .then(function (response) {
      if(response.status === 200) {
        that.setState({chartData: response.data, isLoaded:true})
      }
    })
    .catch(function (error) {
      console.log(error);
    })
  };

  render() {
    const {isLoaded, chartData} = this.state

    if(isLoaded === true){
      return (
        <Col md="6">
          <div className="frame-box">
            <Chart
                width={'90%'}
                height={'360px'}
                chartType="PieChart"
                className="chart-box"
                loader={<div>Loading Chart</div>}
                spreadSheetUrl={'https://docs.google.com/spreadsheets/d/1ul4YB125ho2FVA_xK7qD_8UL8tEpXnOL7YWHWe9Bdxs/edit#gid=0'}
                options={{
                  chartArea: { width: '95%', height: '65%' },
                  pieHole: 0.4,
                  colors: ['#d9bc5c','#e69680','#0d9aae','#666547'],
                  pieSliceText: 'value',
                  sliceVisibilityThreshold: 0.02,
                }}
                rootProps={{ 'data-testid': '1' }}
              />
            <div className="chart-title">
              Metode Pengadaan
            </div>
          </div>
        </Col>
      );
    }
    else {
      return (
        <Col md="6">
          <LoadingItem />
        </Col>
      )
    }
  }
}

export class PieChartProgressTender extends Component {
  constructor(props){
    super(props)

    this.state = {
      isLoaded: false,
      chartData: [],
    }
  }

  componentDidMount() {
    this._getTenderSelesai()
  }

  _getTenderSelesai = () => {
    let headers = { "secret-key": ApiKey}
    var that = this
    GeneralAPI().get(`/b/${TenderSelesaiCode}/latest`,{headers: headers})
    .then(function (response) {
      if(response.status === 200) {
        that.setState({chartData: response.data, isLoaded:true})
      }
    })
    .catch(function (error) {
      console.log(error);
    })
  };

  render() {
    const {isLoaded, chartData} = this.state

    if(isLoaded === true){
      return (
        <Col md="6">
          <div className="frame-box">
            <Chart
                width={'90%'}
                height={'360px'}
                chartType="PieChart"
                className="chart-box"
                loader={<div>Loading Chart</div>}
                data={[
                  ['Progress', 'Total'],
                  ['Sudah di BPPBJ', 1293],
                  ['Belum di Ajukan', 92],
                ]}
                options={{
                  chartArea: { width: '95%', height: '65%' },
                  pieHole: 0.4,
                  animation: {
                    startup: true,
                    easing: 'linear',
                    duration: 1000,
                  },
                }}
                rootProps={{ 'data-testid': '1' }}
              />
            <div className="chart-title">
              Progress Pengajuan
            </div>
          </div>
        </Col>
      );
    }
    else {
      return (
        <Col md="6">
          <LoadingItem />
        </Col>
      )
    }
  }
}