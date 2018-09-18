import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Jumbo = props => {
  return (
    <div>
      <Jumbotron>
        <Container fluid>
          <h1 className="display-3">r21Billard Games</h1>
          <p className="lead">
            this is tha wolrds most amazing billard games storing app that ya've
            ever seen in ya hole entire life... trust me.
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
