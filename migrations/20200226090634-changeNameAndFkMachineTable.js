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

exports.up = async function (db) {
  await db.changeColumn('machine', 'name', {
    notNull: true,
  });
  await db.renameColumn('machine', 'productionLineId', 'id_production_line');
};

exports.down = async function(db) {
  await db.changeColumn('machine', 'name', {
    notNull: false,
  });
  await db.renameColumn('machine', 'id_production_line', 'productionLineId');
};

exports._meta = {
  "version": 1
};
