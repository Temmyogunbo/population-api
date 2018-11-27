'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'Locations',
      [
        {
          id: 'beeb37d8-c3bf-47f3-9d7a-1e75bd7fc867',
          name: 'oshodi',
          maleResidents: 50,
          femaleResidents: 53,
          totalResidents: 103,
          relativeLocationId: null,
          createdAt: '2018-11-24T23:32:04.467Z',
          updatedAt: '2018-11-24T23:32:04.467Z',
        },
        {
          id: '8f1df4b6-4d8e-4f45-84bd-08b7d7186654',
          name: 'Agege',
          maleResidents: 50,
          femaleResidents: 53,
          totalResidents: 103,
          relativeLocationId: null,
          createdAt: '2018-11-24T23:33:21.281Z',
          updatedAt: '2018-11-24T23:33:21.281Z',
        },
      ],
      {},
    );
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Locations', null, {});
  },
};
