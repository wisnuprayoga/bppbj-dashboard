import React, { Component } from 'react';
import { Col } from 'reactstrap';
import './BarChart.scss';
import Chart from 'react-google-charts';
import { GeneralAPI } from '../../lib/js/api'
import { ApiKey, TenderSelesaiCode } from '../../lib/js/vars'
import { LoadingItem } from '../../components/loading/Loading'

export default class BarChartKategori extends Component {
  constructor(props){
    super(props)

    this.state = {
      isLoaded: true,
      tenderSelesaiData: [],
    }
  }

  render() {
    const {isLoaded} = this.state

    if(isLoaded === true){
      return (
        <Col md="12">
          <div className="bar-frame-box">
            <div className="chart-frame"> 
              <Chart
                width={'100%'}
                height={'360px'}
                chartType="Bar"
                loader={<Col md="6"><LoadingItem /></Col>}
                spreadSheetUrl={'https://docs.google.com/spreadsheets/d/1epoED-KvmY63zerSsFmHZyGQFSFYrbiPphjKpur-0WM/edit#gid=0'}
                options={{
                  series: {
                    0: { axis: 'Paket' },
                    1: { axis: 'Pagu' },
                  },
                  axes: {
                    x: {
                      Pagu: { label: 'Pagu dalam Milliar' },
                      Paket: { label: 'Paket', side:'top' },
                    },
                  },
                  chartArea: { width: '80%', height: '30%' },
                  bars: 'horizontal',
                  legend: { position: 'bottom', alignment: 'start' },
                  animation: {
                    startup: true,
                    easing: 'linear',
                    duration: 1000,
                  },
                  pointSize: 5
                }}
              />
            </div>
            <div className="chart-title">
              Tender Kategori
              <div className="chart-info">
                Kategori 1: Nilai > 10 M dan Waktu Pelaksanaan > 4 Bulan <br/>
                Kategori 2: Nilai &lt; 10 M dan Waktu Pelaksanaan > 4 Bulan <br/>
                Kategori 3: Nilai > 10 M dan Waktu Pelaksanaan &lt; 4 Bulan <br/>
                Kategori 4: Nilai &lt; 10 M dan Waktu Pelaksanaan &lt; 4 Bulan
              </div>
            </div>
          </div>
        </Col>
      );
    }
  }
}
