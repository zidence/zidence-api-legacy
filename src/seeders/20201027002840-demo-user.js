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
          email: 'gibran@zidence.com',
          hash: '$2y$11$ZgbbYRx2JxBdC4drGOaENeUYUIaRMBOj4R3FlHm0cMOG8PQK5FFr6',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: 'Haidar',
          email: 'haidar@zidence.com',
          hash: '$2y$11$Q/lQEa2Cm6ZUQxy3kAJ90.kTBA3cCqXbw4I1r9CGJhm/wKqbNWifm',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: 'Marzuki',
          email: 'marzuki@zidence.com',
          hash: '$2y$11$XdX7xodyHhAP9bam45iE/.R7j.pSUdXrld3F71aPHDFndG4JieJey',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: 'Faris',
          email: 'faris@zidence.com',
          hash: '$2y$11$xogCfxFM8xk/eD4dZqAmS.II.1sK5E8LWusKubV3gAtHhcsvKNAA2',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: 'Hanif',
          email: 'hanif@zidence.com',
          hash: '$2y$11$FIGtdtIJzJFa2BL3SjVmxOjLKtA2jSlWBKU4hw1ZMwjnJMfzhwARy',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: 'Ahmad',
          email: 'ahmad@zidence.com',
          hash: '$2y$11$wpxUj1JHRR4NKboz8csm9OgfYS43QPz4MZ0BYMWjaIa00vUr6FPDC',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: 'Admin',
          email: 'admin@zidence.com',
          hash: '$2y$11$RZhtbgrfEBEgB2N2WB40UOJyVcw8e4.BNXwz0F5yzcTs8aq4q0OIG',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: 'Contact Person',
          email: 'contact@zidence.com',
          hash: '$2y$11$O.2Pn20BRbz3Mh6JlM06Q.ifR8ByvT5wJGodYa64dwWgogvxKQPnW',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: 'Superuser',
          email: 'superuser@zidence.com',
          hash: '$2y$11$djyEDEXTJNnmjL0J6VI3VegxbnqYY3xS6zOlRxBEpaTOajDV2I99i',
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
