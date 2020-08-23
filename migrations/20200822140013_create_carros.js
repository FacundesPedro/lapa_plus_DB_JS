
exports.up = function(knex) {
  return knex.schema.createTable('carros',(table)=>{
      table.increments('id')
      table.text('modelo').notNullable()
      table.integer('fabrica_ID').notNullable() 
      table.foreign('fabrica_ID').references('fabricas.id')//.inTable('fabricas')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('carros')
};
