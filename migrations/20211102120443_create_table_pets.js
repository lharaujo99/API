
exports.up = function(knex) {
    return knex.schema.createTable('pets', table =>{
        table.increments('id').primary()
        table.string('nomeA').notNull()
        table.string('raca').notNull()
        table.string('porte')
        table.string('endereco')
        table.datetime('data')
        table.datetime('doneAt')
        table.integer('userId').references('id').inTable('donos').notNull()
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('pets')
  };