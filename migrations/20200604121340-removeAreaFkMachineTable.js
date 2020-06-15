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

exports.up = async function(db) {
  await db.removeColumn('machine', 'area_id');
};

exports.down = async function(db) {
  await db.addColumn('machine', 'area_id', {
    type: 'int',
    foreignKey: {
      name: 'machine_id_area_fk',
      table: 'area',
      mapping: 'id',
      rules: { onDelete: 'NO ACTION' }
    },
  });
};

exports._meta = {
  "version": 1
};
