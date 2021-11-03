
exports.up = function(knex) {
    return knex.schema.createTable('petshop', table =>{
        table.increments('id').primary()
        table.string('nome').notNull()
        table.string('endereco')
        table.string('cidade')
        table.string('numero')
        table.string('servicos')
        table.string('valor')
        table.datetime('dataa')
        table.datetime('doneAt')
        table.integer('userId').references('id').inTable('users').notNull()
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('petshop')
  };