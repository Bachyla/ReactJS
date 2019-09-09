import React from 'react';

const {
  Provider: BookstoreServiceProvider,
  Comsumer: BookstoreServiceConsumer
} = React.createContext();

export { BookstoreServiceProvider, BookstoreServiceConsumer };
