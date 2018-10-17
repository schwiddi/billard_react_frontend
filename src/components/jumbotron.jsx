import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Jumbo = props => {
  return (
    <div>
      <Jumbotron>
        <Container fluid>
          <h1 className="display-5">upcomming:</h1>
          <p className="lead">
            <br />- registration - done!
            <br />- login - done!
            <br />- claime playerid - done!
            <br />- simple profile page - in progress...
            <br />- playerdetailscard
            <br />- Events
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
