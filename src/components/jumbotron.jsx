import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Jumbo = props => {
  return (
    <div>
      <Jumbotron>
        <Container fluid>
          <h1 className="display-3">r21Billard Games App</h1>
          <p className="lead">
            this is the wolrds most amazing billard games storing app that you
            have ever seen in your hole entire life... trust me.
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
