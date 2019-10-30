import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';

const VehicleDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record field="model" label="Model:" />
      <Record field="name" label="Name:" />
      <Record field="passengers" label="Passengers:" />
      <Record field="cargoCapacity" label="Cargo Capacity:" />
      <Record field="length" label="Length:" />
      <Record field="vehicleClass" label="Vehicle Class:" />
    </ItemDetails>
  );
};

const mapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getVehicle,
    getImageUrl: swapiService.getVehicleImage
  };
};

export default withSwapiService(mapMethodsToProps)(VehicleDetails);
