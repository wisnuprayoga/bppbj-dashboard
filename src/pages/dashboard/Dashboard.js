import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import './Dashboard.scss';
import { GeneralAPI } from '../../lib/js/api'
import { ApiKey, InfoCardCode } from '../../lib/js/vars'
import { FaRegClock } from 'react-icons/fa'
import Tabletop from 'tabletop'

import { InfoCard, InfoCardEfficientLeft, InfoCardEfficientRight, InfoCardEfficient } from '../../components/infoCard/InfoCard'
import LoadingHome from '../../components/loading/Loading'
import LineChartHistoryTender from '../../components/lineChart/LineChart'
import {PieChartTipePengadaan, PieChartMetodePengadaan, PieChartProgressTender} from '../../components/pieChart/PieChart'
import { parse } from 'path';

class Dashboard extends Component {
  constructor(props){
    super(props)

    this.state = {
      isLoaded: false,
      infoCardData: [],
    }
  }

  componentDidMount() {
    // this._getInfoCardData()
    this._getInfoCardGo()
  }

  _getInfoCardData = () => {
    let headers = { "secret-key": ApiKey}
    var that = this
    GeneralAPI().get(`/b/${InfoCardCode}/latest`,{headers: headers})
    .then(function (response) {
      if(response.status === 200) {
        that.setState({infoCardData: response.data, isLoaded:true})
      }
    })
    .catch(function (error) {
      console.log(error);
    })
  };

  _getInfoCardGo = () => {
    var that = this
    Tabletop.init({
      key: '1dN0itEcr5Bdma6JWiS3XLKrV9390LqI9rx6r35_fTrI',
      callback: googleData => {
        that.setState({infoCardData: googleData, isLoaded:true})
      },
      simpleSheet: true
    })
  }

  render() {
    const {isLoaded, infoCardData} = this.state
    var data = infoCardData[0]
    if(isLoaded === true){
      console.log(data)
      var persetase = (parseInt(data["Selesai"].replace(',','')) / parseInt(data["Paket Masuk"].replace(',','')) * 100).toFixed(2)
      console.log(parseInt(data["Paket Masuk"]))
      var persentaseEffisien = ((parseFloat(data["Total Pagu"]) - parseFloat(data["Total Penawaran"]))/parseFloat(data["Total Pagu"]) * 100).toFixed(2)
      return (
        <div className="dashboard">
          <Container>
            <Row>
              <InfoCard 
                title="Paket Masuk" 
                value={data["Paket Masuk"]} 
                color="#0d9aae"
                icon="1"
              />
              <InfoCard 
                title="Paket Proses" 
                value={parseInt(data["Paket Review"]) + parseInt(data["Paket Tayang"])} 
                color="#6fcb9f"
                icon="2"
              />
              <InfoCard 
                title="Paket Selesai" 
                value={data["Selesai"]}
                color="#e69680"
                icon="3"
              />
              <InfoCard 
                title="Performa" 
                value={persetase + " %"}
                color="#d9bc5c"
                icon="4"
              />
            </Row>

            <Row className="row-dua">
              <Col md="2" />
              <InfoCardEfficient pagu={data["Total Pagu"]} penawaran={data["Total Penawaran"]} value={(parseFloat(data["Total Pagu"]) - parseFloat(data["Total Penawaran"])).toFixed(2)} />
              <InfoCardEfficientLeft value={data["Total Pagu"]}/>
              <InfoCardEfficientRight value={data["Total Penawaran"]}/>
            </Row>

            <Row className="row-tiga">
              <PieChartTipePengadaan />
              <PieChartMetodePengadaan />
            </Row>
          </Container>
          <div className="section-two">
            <Container>
              <Row className="">
                <PieChartProgressTender />
                <LineChartHistoryTender />
              </Row>
            </Container>
          </div>
          {/* <div className="last-update">
            <FaRegClock size="18"/> 
            <span style={{paddingRight:8}}></span>Update Terakhir : 21 Nov 19 08:30
          </div> */}
        </div>
      );
    }
    else {
      return(
        <LoadingHome/>
      )
    }
  }
}

export default Dashboard;
