import React, { Component } from 'react';
import { Container} from 'reactstrap';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <div className="header-box">
        <div className="strip">
          <div></div>
          <div></div>
        </div>
        <Container className="header">
          <div>
            Dashboard BPPBJ
          </div>
        </Container>
      </div>
    );
  }
}

export default Header;