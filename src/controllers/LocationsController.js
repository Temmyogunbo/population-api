import Boom from 'boom';
import models from '../models';

import { findTotalResidents } from '../lib/util';

export class LocationsController {
  static createLocation(location) {
    const {
      name,
      maleResidents,
      femaleResidents,
      relativeLocationId,
    } = location;

    return models.Locations.create({
      name,
      maleResidents,
      femaleResidents,
      totalResidents: findTotalResidents(maleResidents, femaleResidents),
      relativeLocationId,
    })
      .then(result => result)
      .catch(err => Boom.serverUnavailable(err));
  }

  static getLocations() {
    return models.Locations.findAll({
      include: [
        {
          model: models.Locations,
          as: 'relative',
        },
      ],
    })
      .then((result) => {
        if (!result) return { message: 'No locations found' };

        return result;
      })
      .catch(err => Boom.serverUnavailable(err));
  }

  static getLocation(id) {
    return models.Locations.findOne({
      where: { id },
      include: [
        {
          model: models.Locations,
          as: 'relative',
        },
      ],
    })
      .then((result) => {
        if (!result) return { message: 'No location found' };
        return result;
      })
      .catch(err => Boom.serverUnavailable(err));
  }

  static updateLocation(id, location) {
    const {
      name,
      maleResidents,
      femaleResidents,
      relativeLocationId,
    } = location;

    return models.Locations.update(
      {
        name,
        maleResidents,
        femaleResidents,
        totalResidents: findTotalResidents(maleResidents, femaleResidents),
        relativeLocationId,
      },
      {
        where: { id },
        returning: true,
        plain: true,
      },
    )
      .then(result => result[1])
      .catch(err => Boom.serverUnavailable(err));
  }

  static deleteLocation(id) {
    return models.Locations.destroy({
      where: { id },
      returning: true,
      plain: true,
    })
      .then(result => result)
      .catch(err => Boom.serverUnavailable(err));
  }
}

export default LocationsController;
