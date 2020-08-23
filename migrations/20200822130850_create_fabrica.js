
exports.up = function(knex) {
    return knex.schema.createTable('fabricas',(table)=>{
        table.increments('id')
        table.string('name').unique().notNullable()
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('fabricas')
  };
  