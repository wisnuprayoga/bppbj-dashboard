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
      isLoaded: true,
      chartData: [],
    }
  }

  // componentDidMount() {
  //   this._getTenderSelesai()
  // }

  // _getTenderSelesai = () => {
  //   let headers = { "secret-key": ApiKey}
  //   var that = this
  //   GeneralAPI().get(`/b/${TenderSelesaiCode}/latest`,{headers: headers})
  //   .then(function (response) {
  //     if(response.status === 200) {
  //       that.setState({chartData: response.data, isLoaded:true})
  //     }
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   })
  // };

  render() {
    const {isLoaded} = this.state
    if(isLoaded === true){
      return (
        <Col md="6">
          <div className="frame-box">
            <Chart
                width={'90%'}
                height={'360px'}
                chartType="PieChart"
                className="chart-box"
                loader={<Col md="6"><LoadingItem /></Col>}
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
              <div className="chart-info">* Nilai dalam Milliar</div>
            </div>
          </div>
        </Col>
      );
    }
  }
}

export class PieChartMetodePengadaan extends Component {
  constructor(props){
    super(props)

    this.state = {
      isLoaded: true,
      chartData: [],
    }
  }

  render() {
    const {isLoaded} = this.state

    if(isLoaded === true){
      return (
        <Col md="6">
          <div className="frame-box">
            <Chart
                width={'90%'}
                height={'360px'}
                chartType="PieChart"
                className="chart-box"
                loader={<Col md="6"><LoadingItem /></Col>}
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
              <div className="chart-info">* Nilai dalam Milliar</div>
            </div>
          </div>
        </Col>
      );
    }
  }
}

export class PieChartProgressTender extends Component {
  constructor(props){
    super(props)

    this.state = {
      isLoaded: true,
      chartData: [],
    }
  }

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
                loader={<Col md="6"><LoadingItem /></Col>}
                spreadSheetUrl={'https://docs.google.com/spreadsheets/d/18yc7uBC4nmZDSL6_Wge18qzGToj-aGFW1ss8qHfNMtA/edit#gid=0'}
                options={{
                  chartArea: { width: '95%', height: '65%' },
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
              <div className="chart-info">* Nilai dalam Milliar</div>
            </div>
          </div>
        </Col>
      );
    }
  }
}