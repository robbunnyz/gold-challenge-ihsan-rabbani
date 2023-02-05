'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Items', [{
      item_name: 'Perfume',
      item_price: 250000,
      item_stock: 50,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      item_name: 'Gundam',
      item_price: 499000,
      item_stock: 15,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      item_name: 'Action Figure',
      item_price: 349000,
      item_stock: 50,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      item_name: 'Soap',
      item_price: 30000,
      item_stock: 200,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      item_name: 'Charger',
      item_price: 129000,
      item_stock: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      item_name: 'Headset',
      item_price: 300000,
      item_stock: 50,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, 
    {
      item_name: 'Keyboard',
      item_price: 99000,
      item_stock: 50,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, 
    {
      item_name: 'Mouse',
      item_price: 79000,
      item_stock: 55,
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Items', null, {});
  }
};
