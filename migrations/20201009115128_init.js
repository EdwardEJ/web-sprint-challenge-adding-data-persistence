
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments();
      tbl.string('name').notNullable();
      tbl.text('description');
      tbl.boolean('complete').defaultTo(false);
    })

    .createTable('tasks', tbl => {
      tbl.increments();
      tbl.string('description').notNullable();
      tbl.text('notes');
      tbl.boolean('completed').defaultTo(false);

      tbl
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .onDelete('restrict')
        .onUpdate('cascade');
    })

    .createTable('resources', tbl => {
      tbl.increments();
      tbl.string('name').unique();
      tbl.string('description');
    })

    .createTable('task_resources', tbl => {
      tbl.increments();

      tbl.
        integer('tasks_id')
        .unsigned()
        .references('id')
        .inTable('tasks')
        .onDelete('restrict')
        .onUpdate('cascade');
      tbl.
        integer('resources_id')
        .unsigned()
        .references('id')
        .inTable('resources')
        .onDelete('restrict')
        .onUpdate('cascade');

    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('task_resources');
};
