import React from 'react';
import { VehiclesList } from '../sw-components';
import { withRouter } from 'react-router-dom';

const VehiclesPage = ({ history }) => {
  return <VehiclesList onItemSelected={id => history.push(id)} />;
};

export default withRouter(VehiclesPage);
