'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db) {
  return db.createTable('group', {
    id: { type: 'int', primaryKey: true },
    name: 'string',
    indicatorId: {
      type: 'int',
      foreignKey: {
        name: 'group_indicator_id_fk',
        table: 'indicator',
        mapping: 'id',
        rules: { onDelete: 'NO ACTION' }
      }
    }
  });
};

exports.down = function (db) {
  return db.dropTable('group');
};

exports._meta = {
  "version": 1
};
