'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Todos', [
      {
        "title": "Project team",
        "description": "CS2020 due on 4th Oct",
        "isCompleted": false,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "title": "Laundry",
        "isCompleted": false,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "title": "Buy essentials",
        "description":"Orange, Cereal, Mike, Shampoos",
        "isCompleted": true,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "title": "Watch movie",
        "description":"30th Oct, 9pm",
        "isCompleted": false,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "title": "Interview",
        "description":"14th Nov, 8am-9am",
        "isCompleted": false,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
   
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Todos', null, {});
  }
};
