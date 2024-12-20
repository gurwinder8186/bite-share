export async function up(knex) {
  await knex.schema.createTable('baskets', (table) => {
    table.increments('id').primary()
    table.string('user_id').references('users.id')
    table.string('description')
    table.string('categories')
    table.string('dietary_content')
    table.string('location')
    table.string('status')
    table.string('image')
    table.timestamp('created_at')
    table.timestamp('updated_at')

    // Add indices
    table.index(['user_id'])
  })
}

export async function down(knex) {
  await knex.schema.dropTable('baskets')
}
