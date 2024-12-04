export async function seed(knex) {
  await knex('messages').del()
  await knex('baskets').del()
  await knex('matches').del()
  await knex('users').del()

  await knex('users').insert([
    {
      id: 'auth0|101',
      username: 'Ron Swanson',
      full_name: 'Ron Swanson',
      email: 'ron@example.com',
      points: 0,
      location: 'West Auckland',
      icon: '',
    },
    {
      id: 'auth0|102',
      username: 'BigShrek',
      full_name: 'Shrek',
      email: 'shrek@example.com',
      points: 0,
      location: 'North Shore',
      icon: '',
    },
    {
      id: 'auth0|103',
      username: 'daphAttack',
      full_name: 'Daph Simons',
      email: 'daph@example.com',
      points: 0,
      location: 'East Auckland',
      icon: '',
    },
    {
      id: 'auth0|104',
      username: 'J-Dog',
      full_name: 'Jared Pinfold',
      email: 'jared@example.com',
      points: 0,
      location: 'West Auckland',
      icon: '',
    },
    {
      id: 'auth0|67476f8defa904b4cd515493',
      username: 'hungryhenry',
      full_name: 'Henry Tran',
      email: 'henry@example.com',
      points: 0,
      location: 'East Auckland',
      icon: '',
    },
    {
      id: 'auth0|6747d7830ba06e401cd48bdb',
      username: 'slatch',
      full_name: 'Harpreet Singh',
      email: 'harpreet@example.com',
      points: 0,
      location: 'South Auckland',
      icon: '',
    },
    {
      id: 'auth0|6747d2aed8d9b71e8babb226',
      username: 'Gur-Winner',
      full_name: 'Gurwinder Singh',
      email: 'gurwinder@example.com',
      points: 0,
      location: 'South Auckland',
      icon: '',
    },
  ])

  await knex('baskets').insert([
    {
      id: 1,
      user_id: 'auth0|101',
      description:
        "Meat. Because anything else isn't food. The whisky? For emergencies only.",
      categories: 'Meat,Beverages',
      dietary_content: 'Meat',
      location: 'West Auckland',
      status: 'active',
      image: '',
      created_at: 1698557400000,
      updated_at: 1698557700000,
    },
    {
      id: 2,
      user_id: 'auth0|102',
      description: 'Onions, beets and swamp eggs.  All best eaten raw.',
      categories: 'Fruit,Vegetables,Eggs',
      dietary_content: 'Vegetarian',
      location: 'North Shore',
      status: 'active',
      image: '',
      created_at: 1698559200000,
      updated_at: 1698559500000,
    },
    {
      id: 3,
      user_id: 'auth0|103',
      description:
        'The perfect basket if you need to whip up an emergency dairy-free baked cheesecake',
      categories: 'Carbs,Canned,Baking,Fruit',
      dietary_content: 'DairyFree',
      location: 'East Auckland',
      status: 'active',
      image: '',
      created_at: 1698561600000,
      updated_at: 1698561900000,
    },
    {
      id: 4,
      user_id: 'auth0|104',
      description:
        'I hijacked a milk delivery truck, and need to sell all this milk before it goes off',
      categories: 'Dairy',
      dietary_content: 'Milk',
      location: 'West Auckland',
      status: 'active',
      image: '',
      created_at: 1698564000000,
      updated_at: 1698564300000,
    },
    {
      id: 5,
      user_id: 'auth0|6747d7830ba06e401cd48bdb',
      description: 'Only the finest Halal-certified meats and cooking spices.',
      categories: 'Meat,Canned,Baking',
      dietary_content: 'Halal',
      location: 'South Auckland',
      status: 'active',
      image: '',
      created_at: 1698566400000,
      updated_at: 1698566700000,
    },
    {
      id: 6,
      user_id: 'auth0|6747d2aed8d9b71e8babb226',
      description:
        'Avocados, quinoa, and vegan jerky.  What else would you need?',
      categories: 'Fruit,Canned,Vegetables,Snacks',
      dietary_content: 'Vegan',
      location: 'South Auckland',
      status: 'active',
      image: '',
      created_at: 1698568800000,
      updated_at: 1698569100000,
    },
  ])
}
