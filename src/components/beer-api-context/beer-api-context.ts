import React from 'react';

const {
  Provider: BeerDataProvider,
  Consumer: BeerDataConsumer
} = React.createContext('');

export {
  BeerDataProvider,
  BeerDataConsumer
}