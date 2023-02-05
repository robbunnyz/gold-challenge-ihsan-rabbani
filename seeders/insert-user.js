'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      name: 'Jajang Nurjaman',
      password: 'djanur14',
      email: 'jajangnurjaman@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Egy Vikir',
      password: 'egyvikri10',
      email: 'egyvikri@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Maman Abdurrahman',
      password: 'maman20',
      email: 'mamanabdur@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Siti Nurbaya',
      password: 'nurbaya19',
      email: 'sitinurbaya@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Alex Albon',
      password: 'alexalbon13',
      email: 'alexalbon@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Nurhayati',
      password: 'nurhayati07',
      email: 'nurhayati@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, 
    {
      name: 'Dilan Muhammad',
      password: 'dilanmuh21',
      email: 'dilanmuh@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, 
    {
      name: 'Milea Maesaroh',
      password: 'mileamae12',
      email: 'maesarohmilea@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
