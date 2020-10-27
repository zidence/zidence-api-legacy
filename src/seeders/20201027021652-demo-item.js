'use strict'

module.exports = {
  up: async (queryInterface) => {
    /**
     * Add seed commands here.
     */
    await queryInterface.bulkInsert(
      'items',
      [
        {
          item: 'Rumah Mevvah',
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          item: 'Villa Mevvah',
          user_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          item: 'Apartemen Mevvah',
          user_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          item: 'Gubug',
          user_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          item: 'Kolong Jembatan',
          user_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          item: 'WC Mesjid',
          user_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface) => {
    /**
     * Add commands to revert seed here.
     */
    await queryInterface.bulkDelete('items', null, {
      truncate: true,
      restartIdentity: true,
    })
  },
}
