import React, { Component } from 'react';
import { Col } from 'reactstrap';
import './LineChart.scss';
import Chart from 'react-google-charts';
import { GeneralAPI } from '../../lib/js/api'
import { ApiKey, TenderSelesaiCode } from '../../lib/js/vars'
import { LoadingItem } from '../../components/loading/Loading'

export default class LineChartHistoryTender extends Component {
  constructor(props){
    super(props)

    this.state = {
      isLoaded: false,
      tenderSelesaiData: [],
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
        that.setState({tenderSelesaiData: response.data, isLoaded:true})
      }
    })
    .catch(function (error) {
      console.log(error);
    })
  };

  render() {
    const {isLoaded, tenderSelesaiData} = this.state

    if(isLoaded === true){
      return (
        <Col md="6">
          <div className="frame-box">
            <Chart
              width={'90%'}
              height={'360px'}
              chartType="AreaChart"
              className="chart-box"
              loader={<div>Loading Chart</div>}
              spreadSheetUrl={'https://docs.google.com/spreadsheets/d/1fwNjCkUS-0nAUaB0q9hlCIgCku24tEcqycpLs5P-gOs/edit#gid=0'}
              options={{
                hAxis: { title: 'Bulan', titleTextStyle: { color: '#333' } },
                vAxis: { minValue: 0 },
                chartArea: { width: '85%', height: '65%' },
                legend: { position: 'bottom', alignment: 'start' },
                animation: {
                  startup: true,
                  easing: 'linear',
                  duration: 1000,
                },
                pointSize: 5
              }}
            />
            <div className="chart-title">
              History Tender
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
