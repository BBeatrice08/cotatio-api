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
  return db.createTable('item', {
    id: { type: 'int', primaryKey: true },
    name: 'string',
    description: 'string',
    groupId: {
      type: 'int',
      foreignKey: {
        name: 'item_group_id_fk',
        table: 'group',
        mapping: 'id',
        rules: { onDelete: 'NO ACTION' }
      }
    }
  });
};

exports.down = function (db) {
  return db.dropTable('item');
};

exports._meta = {
  "version": 1
};
