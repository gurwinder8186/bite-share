export async function seed(knex) {
  await knex('matches').del()

  await knex('matches').insert([
    {
      id: 1,
      giver_id: 'auth|123',
      receiver_id: 'auth|456',
      status: 'active',
      created_at: 1698557700000,
      updated_at: 1698558000000,
    },
    {
      id: 2,
      giver_id: 'auth|789',
      receiver_id: 'auth|101',
      status: 'active',
      created_at: 1698559500000,
      updated_at: 1698559800000,
    },
    {
      id: 3,
      giver_id: 'auth|202',
      receiver_id: 'auth|123',
      status: 'active',
      created_at: 1698561600000,
      updated_at: 1698562200000,
    },
    {
      id: 4,
      giver_id: 'auth|456',
      receiver_id: 'auth|789',
      status: 'active',
      created_at: 1698564000000,
      updated_at: 1698564300000,
    },
    {
      id: 5,
      giver_id: 'auth|101',
      receiver_id: 'auth|202',
      status: 'active',
      created_at: 1698566400000,
      updated_at: 1698566700000,
    },
    {
      id: 6,
      giver_id: 'auth|123',
      receiver_id: 'auth|789',
      status: 'active',
      created_at: 1698568800000,
      updated_at: 1698569100000,
    },
    {
      id: 7,
      giver_id: 'auth|456',
      receiver_id: 'auth|101',
      status: 'active',
      created_at: 1698571200000,
      updated_at: 1698571800000,
    },
    {
      id: 8,
      giver_id: 'auth|789',
      receiver_id: 'auth|202',
      status: 'active',
      created_at: 1698573600000,
      updated_at: 1698573900000,
    },
    {
      id: 9,
      giver_id: 'auth|123',
      receiver_id: 'auth|101',
      status: 'active',
      created_at: 1698576000000,
      updated_at: 1698576600000,
    },
    {
      id: 10,
      giver_id: 'auth|456',
      receiver_id: 'auth|202',
      status: 'active',
      created_at: 1698578400000,
      updated_at: 1698578700000,
    },
  ])
}
