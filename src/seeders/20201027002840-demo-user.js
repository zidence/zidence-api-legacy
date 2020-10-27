'use strict'

module.exports = {
  up: async (queryInterface) => {
    /**
     * Add seed commands here.
     */
    await queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'Gibran',
          email: 'gibran@megah.com',
          hash: '$2y$11$TaCDGnnjA3DqvWYOkkNZWuaJiPGAEhNevgwSPmK8riL/Yc4KsJSPC',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: 'Haidar',
          email: 'haidar@megah.com',
          hash: '$2y$11$Zf7m8YvgGeDIhwgEme60zuCu8LRhFmPHtrbKeEVy.PUzs.LTB6o6m',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: 'Marzuki',
          email: 'marzuki@megah.com',
          hash: '$2y$11$PwUmm0wUFQpYtHKAnT4wH.E8f/59WxapuVLvXy1Z62qRbaf75s7fC',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: 'Faris',
          email: 'faris@megah.com',
          hash: '$2y$11$CmB4iSaXUr7ho80ERyH8Q.XomhLD8vsr5P11wbT/17obou6ohrpZK',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: 'Hanif',
          email: 'hanif@megah.com',
          hash: '$2y$11$raDPQq.YmrL0eCs9Uf/7b.iFKPsg/nDXVhviaT9wnb4BknNk9oLoi',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: 'Ahmad',
          email: 'ahmad@megah.com',
          hash: '$2y$11$3Rfm69DK.j8.Z2ZLJ4qZnO8ukkVcBTXj8QPYMK4Wzpj/XoSwuCRBq',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: 'Admin',
          email: 'admin@megah.com',
          hash: '$2y$11$RZhtbgrfEBEgB2N2WB40UOJyVcw8e4.BNXwz0F5yzcTs8aq4q0OIG',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: 'Contact Person',
          email: 'contact@megah.com',
          hash: '$2y$11$HvqEsHarBod.L9PXx0l9ZuOBdlqJ65ye/Pd.lRQlC3UzuScqTtrC2',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: 'Superuser',
          email: 'superuser@megah.com',
          hash: '$2y$11$JwhFdnoqcPQCyHuUkKr9pOjdAZJMAIHgMQnQgxbGQsTFmNfRum7yS',
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
    await queryInterface.bulkDelete('users', null, {
      truncate: true,
      restartIdentity: true,
    })
  },
}
