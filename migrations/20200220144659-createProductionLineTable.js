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
  return db.createTable('production_line', {
    id: { type: 'int', primaryKey: true },
    name: 'string',
    machineNumber: 'int',
    areaId: {
      type: 'int',
      foreignKey: {
        name: 'production_line_area_id_fk',
        table: 'area',
        mapping: 'id',
        rules: { onDelete: 'NO ACTION'}
      },
    },
  });
};

exports.down = function (db) {
  return db.dropTable('production_line');
};

exports._meta = {
  "version": 1
};
