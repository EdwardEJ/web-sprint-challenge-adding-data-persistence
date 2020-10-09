
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments();
      tbl.string('name').notNullable()
      tbl.text('description')
      tbl.boolean('complete').defaultTo(false);
    })
    .createTable('tasks', tbl => {
    tbl.increments();
    tbl.
    tbl.
    })
    .createTable('task_resources', tbl => {
    tbl.increments();
    tbl.
    tbl.
    })
    .createTable('resources', tbl => {
    tbl.increments();
    tbl.
    tbl.
  })
};

exports.down = function(knex) {
  
};
