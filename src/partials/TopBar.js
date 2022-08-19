import {useEffect, useState} from 'react';
import { Nav} from 'react-bootstrap';

const Topbar = () => {
    return(
      <>
        <div className='container'>
          <div className="topbar-tabs">
            <Nav className="justify-content-center" activeKey="/home">
              <Nav.Item>
                <Nav.Link href="/home">Scuba Diving</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Water</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Nature</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>
      </>
    );
}

export default Topbar;
