/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('Joined', (table) =>{
    table.increments('id').primary();
    table.integer('user_id').references('id').inTable('users')
    table.integer('Event_id').references('id').inTable('Events')
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('Joined')