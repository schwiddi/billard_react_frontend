import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Jumbo = props => {
  return (
    <div>
      <Jumbotron>
        <Container fluid>
          <h1 className="display-3">r21Billard Games</h1>
          <p className="lead">
            this is tha world's most amazing billiard games storing app that
            you've ever seen in ya hole entire life... trust me.
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
