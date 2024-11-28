export async function up(knex) {
  await knex.schema.createTable('messages', (table) => {
    table.increments('id').primary()
    table.integer('matches_id').references('matches.id')
    table.integer('sender_id').references('users.id')
    table.string('message')
    table.timestamp('sent_at')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('messages')
}