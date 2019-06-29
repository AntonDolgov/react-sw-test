import React from 'react';
import { SwapiServiceConsumer } from '../context/swapi-service-context';

const withSwapiService = mapMethodsToProps => Wrapped => props => (
    <SwapiServiceConsumer>
      {
        swapiService => (
          <Wrapped {...props} {...swapiService} />
        )
      }
    </SwapiServiceConsumer>
  );

export default withSwapiService;
