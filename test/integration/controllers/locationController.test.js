import 'babel-polyfill';
import server from '../../../src/server';

let getServer;
describe('locations', () => {
  before(async () => {
    getServer = await server(false);
  });

  describe('locations', () => {
    it('should /POST locations', async () => {
      const payload = {
        name: 'Agege',
        maleResidents: 50,
        femaleResidents: 53,
      };
      const options = {
        method: 'POST',
        url: '/api/v1/locations',
        payload,
      };

      const response = await getServer.inject(options);
      const responseData = JSON.parse(response.payload);

      expect(response.statusCode).to.equal(201);
      expect(responseData.name).to.equal(payload.name);
      expect(responseData.maleResidents).to.equal(payload.maleResidents);
      expect(responseData.femaleResidents).to.equal(payload.femaleResidents);
    });

    it('should not /POST locations for bad request data', async () => {
      const payload = {
        name: '',
        maleResidents: 50,
        femaleResidents: 53,
      };
      const options = {
        method: 'POST',
        url: '/api/v1/locations',
        payload,
      };

      const response = await getServer.inject(options);
      const responseData = JSON.parse(response.payload);

      expect(response.statusCode).to.equal(400);
      expect(responseData.message).to.equal('Invalid request payload input');
    });

    it('should /GET locations', async () => {
      const options = {
        method: 'GET',
        url: '/api/v1/locations',
      };
      const response = await getServer.inject(options);
      const responseData = JSON.parse(response.payload);

      expect(response.statusCode).to.equal(200);
      expect(responseData).to.be.an('array');
      expect(responseData).to.have.lengthOf(3);
    });

    it('should /GET a particular location', async () => {
      const payload = {
        id: 'beeb37d8-c3bf-47f3-9d7a-1e75bd7fc867',
        name: 'oshodi',
        maleResidents: 50,
        femaleResidents: 53,
        totalResidents: 103,
        relativeLocationId: null,
        createdAt: '2018-11-24T23:32:04.467Z',
        updatedAt: '2018-11-24T23:32:04.467Z',
      };
      const options = {
        method: 'GET',
        url: '/api/v1/locations/beeb37d8-c3bf-47f3-9d7a-1e75bd7fc867',
      };
      const response = await getServer.inject(options);
      const responseData = JSON.parse(response.payload);

      expect(response.statusCode).to.equal(200);
      expect(responseData).to.be.an('object');
      expect(responseData.name).to.equal(payload.name);
      expect(responseData.maleResidents).to.equal(payload.maleResidents);
      expect(responseData.femaleResidents).to.equal(payload.femaleResidents);
    });

    it('should /PUT update a particular location', async () => {
      const payload = {
        name: 'oshodi',
        maleResidents: 50,
        femaleResidents: 53,
      };
      const options = {
        method: 'PUT',
        url: '/api/v1/locations/beeb37d8-c3bf-47f3-9d7a-1e75bd7fc867',
        payload,
      };
      const response = await getServer.inject(options);
      const responseData = JSON.parse(response.payload);

      expect(response.statusCode).to.equal(200);
      expect(responseData).to.be.an('object');
      expect(responseData.name).to.equal(payload.name);
      expect(responseData.maleResidents).to.equal(payload.maleResidents);
      expect(responseData.femaleResidents).to.equal(payload.femaleResidents);
    });

    it('should not /PUT bad request data', async () => {
      const payload = {
        name: '',
        maleResidents: 50,
        femaleResidents: 53,
      };
      const options = {
        method: 'PUT',
        url: '/api/v1/locations/beeb37d8-c3bf-47f3-9d7a-1e75bd7fc867',
        payload,
      };
      const response = await getServer.inject(options);
      const responseData = JSON.parse(response.payload);

      expect(response.statusCode).to.equal(400);
      expect(responseData.message).to.equal('Invalid request payload input');
    });

    it('should /DELETE a particular location', async () => {
      const options = {
        method: 'DELETE',
        url: '/api/v1/locations/beeb37d8-c3bf-47f3-9d7a-1e75bd7fc867',
      };

      const response = await getServer.inject(options);
      expect(response.statusCode).to.equal(204);
    });

    it('should not /GET a particular location after deletion', async () => {
      const options = {
        method: 'GET',
        url: '/api/v1/locations/beeb37d8-c3bf-47f3-9d7a-1e75bd7fc867',
      };

      const response = await getServer.inject(options);
      const responseData = JSON.parse(response.payload);

      expect(response.statusCode).to.equal(200);
      expect(responseData.message).to.equal('No location found');
    });
  });
});
