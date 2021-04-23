import React, { Component } from 'react';
import { Container, Col, Row, Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import './Dashboard.scss';
import { GeneralAPI } from '../../lib/js/api'
import { ApiKey, InfoCardCode } from '../../lib/js/vars'
import { FaRegClock } from 'react-icons/fa'
import Tabletop from 'tabletop'

import { InfoCard, InfoCardEfficientLeft, InfoCardEfficientRight, InfoCardEfficient } from '../../components/infoCard/InfoCard'
import LoadingHome from '../../components/loading/Loading'
import LineChartHistoryTender from '../../components/lineChart/LineChart'
import BarChartKategori from '../../components/barChart/BarChart'
import {PieChartTipePengadaan, PieChartMetodePengadaan, PieChartProgressTender} from '../../components/pieChart/PieChart'
import { parse, relative } from 'path';

class Dashboard extends Component {
  constructor(props){
    super(props)

    this.state = {
      isLoaded: false,
      dropdownOpen: true, 
      setDropdownOpen: true,
      infoCardData: [],
      sourceData: []
    }
  }

  componentDidMount() {
    // this._getInfoCardData()
    this._getSourceData()
    //this._getInfoCardGo()
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

  _getSourceData = () => {
    var that = this
    Tabletop.init({
      key: '1xR9jxDNjTPAGcSbrJqzBskdeOC8605o610aRVOrIyFA',
      callback: (googleData, tabletop) => {
        console.log(tabletop.sheets("Data")["elements"])
        that.setState({sourceData: tabletop.sheets("Data")["elements"], isLoaded:false})
        console.log(JSON.parse(tabletop.sheets("Data")["elements"][0]["Data"]))
      },
      simpleSheet: true,
    })
  }

  _toggle = () => {
    this.setState({dropdownOpen: !this.state.dropdownOpen})
    console.log(this.dropdownOpen)
  }

  render() {
    const {isLoaded, infoCardData, sourceData} = this.state
    var data = infoCardData[0]
    

    if(isLoaded === true){
      var persetase = (parseInt(data["Selesai"].replace(',','')) / parseInt(data["Paket Masuk"].replace(',','')) * 100).toFixed(2)
      var persentaseEffisien = ((parseFloat(data["Total Pagu"]) - parseFloat(data["Total Penawaran"]))/parseFloat(data["Total Pagu"]) * 100).toFixed(2)
      return (
        <div className="dashboard">
          <Container>
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this._toggle} className="drop-ta">
              <DropdownToggle caret>
                2021
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem text>2020</DropdownItem>
                <DropdownItem text>2021</DropdownItem>
              </DropdownMenu>
            </Dropdown>
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
              <InfoCardEfficient pagu={data["Total Pagu"]} penawaran={data["Total Penawaran"]} value={(parseFloat(data["Total Pagu"].replace(',','')) - parseFloat(data["Total Penawaran"].replace(',',''))).toFixed(2)} />
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
          <div className="section-tree">
            <Container>
              <Row>
                <BarChartKategori />
              </Row>
            </Container>
          </div>
          <div>
            <Container>
              <div className="download-excel" onClick={ () => window.open("https://docs.google.com/spreadsheets/d/1UKFuX3c140v0PGN1phjxBOLHfgUmD_P6HGdnz2r3ojw/export?format=xlsx")}>
                Download Excel
              </div>
            </Container>
          </div>
          <div className="last-update">
            <FaRegClock size="18"/> 
            <span style={{paddingRight:8}}></span>Last Update : {data["Last Update"]}
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
