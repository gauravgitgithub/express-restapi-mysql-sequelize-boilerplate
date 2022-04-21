

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'users',
    [
      {
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@gmail.com',
        password: '5ebe2294ecd0e0f08eab7690d2a6ee69',// Plain TEXT Password : secret
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'User',
        lastName: 'User',
        email: 'user@gmail.com',
        password: '5ebe2294ecd0e0f08eab7690d2a6ee69',// Plain TEXT Password : secret
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
