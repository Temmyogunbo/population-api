import locationsSchema from '../schema/locationsSchema';
import LocationsController from '../controllers/LocationsController';

export const register = (plugin) => {
  plugin.route([
    {
      method: 'POST',
      path: '/locations',
      handler: async (request, h) => {
        const result = await LocationsController.createLocation(
          request.payload,
        );

        return h.response(result).code(201);
      },
      options: {
        validate: {
          payload: locationsSchema,
        },
      },
    },
    {
      method: 'GET',
      path: '/locations',
      handler: () => LocationsController.getLocations(),
    },
    {
      method: 'GET',
      path: '/locations/{id}',
      handler: (request, h) => LocationsController.getLocation(
        `${encodeURIComponent(request.params.id)}`,
      ),
    },
    {
      method: 'PUT',
      path: '/locations/{id}',
      handler: (request, h) => LocationsController.updateLocation(
        `${encodeURIComponent(request.params.id)}`,
        request.payload,
      ),
      options: {
        validate: {
          payload: locationsSchema,
        },
      },
    },
    {
      method: 'DELETE',
      path: '/locations/{id}',
      handler: async (request, h) => {
        const result = await LocationsController.deleteLocation(
          `${encodeURIComponent(request.params.id)}`,
        );

        return h.response(result).code(204);
      },
    },
  ]);
};

export const name = 'locations';
export default register;
