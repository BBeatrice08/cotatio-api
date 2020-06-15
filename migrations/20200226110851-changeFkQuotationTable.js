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
  await db.removeColumn('quotation', 'itemId');
  await db.renameColumn('quotation', 'machineId', 'id_machine');
  await db.renameColumn('quotation', 'userId', 'id_user');
};

exports.down = async function(db) {
  await db.addColumn('quotation', 'itemId', {
    type: 'int',
    foreignKey: {
      name: 'quotation_item_id_fk',
      table: 'item',
      mapping: 'id',
      rules: { onDelete: 'NO ACTION' },
    }
  });
  await db.renameColumn('quotation', 'id_machine', 'machineId');
  await db.renameColumn('quotation', 'id_user', 'userId');
};

exports._meta = {
  "version": 1
};
