import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import './Dashboard.scss';
import { GeneralAPI } from '../../lib/js/api'
import { ApiKey, InfoCardCode } from '../../lib/js/vars'
import { FaRegClock } from 'react-icons/fa'

import { InfoCard, InfoCardEfficientLeft, InfoCardEfficientRight, InfoCardEfficient } from '../../components/infoCard/InfoCard'
import LoadingHome from '../../components/loading/Loading'
import LineChartHistoryTender from '../../components/lineChart/LineChart'
import {PieChartTipePengadaan, PieChartMetodePengadaan} from '../../components/pieChart/PieChart'

class Dashboard extends Component {
  constructor(props){
    super(props)

    this.state = {
      isLoaded: false,
      infoCardData: [],
    }
  }

  componentDidMount() {
    this._getInfoCardData()
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

  render() {
    const {isLoaded, infoCardData} = this.state
    if(isLoaded === true){
      var persetase = (infoCardData.paket_selesai / infoCardData.paket_masuk * 100).toFixed(2)
      return (
        <div className="dashboard">
          <Container>
            <Row>
              <InfoCard 
                title="Paket Masuk" 
                value={infoCardData.paket_masuk} 
                color="#0d9aae"
                icon="1"
              />
              <InfoCard 
                title="Paket Proses" 
                value={infoCardData.paket_proses} 
                color="#6fcb9f"
                icon="2"
              />
              <InfoCard 
                title="Paket Selesai" 
                value={infoCardData.paket_selesai}
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
              <InfoCardEfficient value={(42.245 - 35.420).toFixed(3)} />
              <InfoCardEfficientLeft value={42.245}/>
              <InfoCardEfficientRight value={35.420}/>
            </Row>

            <Row className="row-tiga">
              <LineChartHistoryTender />
              <PieChartTipePengadaan />
            </Row>
          </Container>
          <div className="section-two">
            <Container>
              <Row className="">
                <PieChartMetodePengadaan />
                <PieChartTipePengadaan />
              </Row>
            </Container>
          </div>
          <div className="last-update">
            <FaRegClock size="18"/> 
            <span style={{paddingRight:8}}></span>Update Terakhir : 21 Nov 19 08:30
          </div>
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
