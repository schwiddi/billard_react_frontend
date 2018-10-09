import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Jumbo = props => {
  return (
    <div>
      <Jumbotron>
        <Container fluid>
          <h1 className="display-3">r21Billard</h1>
          <p className="lead">
            upcoming:
            <br />- registration - done!
            <br />- login - done!
            <br />- claime playerid
            <br />- playerdetailscard
            <br />- Events
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
